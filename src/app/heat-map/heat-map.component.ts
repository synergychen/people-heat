import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import * as d3 from 'd3';

import { LocationService } from '../shared/location.service';
import { City } from '../shared/city.model';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HeatMapComponent implements OnInit {

  readonly width: number = 960;
  readonly height: number = 960;
  readonly viewBox: string = "0 180 960 500";
  readonly markerFadeInDuration: number = 3000;
  readonly markerFadeOutDuration: number = 20000;

  topo: any = topojson;

  private svgG: any;
  private projection: any;
  private cityFeatureCollection: Object;

  @Input() city: City;

  constructor(
    private locationService: LocationService
  ) { }

  ngOnChanges(changes: any) {
    if (changes.city && changes.city.currentValue) {
      let coordinates = [
        changes.city.currentValue.longitude,
        changes.city.currentValue.latitude
      ];
      this.addMarker(coordinates);
    }
  }

  ngOnInit() {
    this.projection = d3.geoMercator()
      .scale((this.width + 1) / 2 / Math.PI)
      .translate([this.width/2, this.height/2])
      .precision(0.1);
    this.svgG = d3.select("#heat-map-g");
    let path = d3.geoPath()
      .projection(this.projection);

    this.locationService.getTopology()
      .subscribe(
        topology => {
          // add country borders
          let features = this.topo
            .feature(topology, topology.objects.countries)
            .features;

          this.svgG.selectAll("path")
            .data(features)
            .enter()
            .append("path")
            .attr("class", "geo-border")
            .attr("d", path)
        },
        error => {
          console.error(error);
        }
      )
  }

  private addMarker(coordinates): void {
    let lat = coordinates[1];
    let lon = coordinates[0];
    let circle = this.svgG.append("circle")
      .attr("class", "marker")
      .attr("cx", this.projection([lon, lat])[0])
      .attr("cy", this.projection([lon, lat])[1])
      .attr("r", 5)
      .style("fill", "red");

    circle.style("opacity", 0)
      .transition()
      .duration(this.markerFadeInDuration)
      .style("opacity", 1)
      .transition()
      .duration(this.markerFadeOutDuration)
      .style("opacity", 0)
      .remove()
  }

}
