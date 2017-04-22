import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';

import { HeatMapService } from './heat-map.service';

@Component({
  selector: 'app-heat-map',
  templateUrl: './heat-map.component.html',
  styleUrls: ['./heat-map.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HeatMapComponent implements OnInit {

  width: number = 960;
  height: number = 960;
  viewBox: string = "0 180 960 500";
  topo: any = topojson;
  private svgG: any;
  private projection: any;

  constructor(
    private heatMapService: HeatMapService
  ) { }

  ngOnInit() {
    this.projection = d3.geoMercator()
      .scale((this.width + 1) / 2 / Math.PI)
      .translate([this.width/2, this.height/2])
      .precision(0.1);
    this.svgG = d3.select("#heat-map-g");
    let path = d3.geoPath()
      .projection(this.projection);

    this.heatMapService.getTopology()
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

          // add randon city marker
          this.heatMapService.getCities()
            .subscribe(
              featureCollection => {
                let randCoord = this.getRandomCoordinates(featureCollection);
                this.addMarker(randCoord);
              },
              error => {
                console.error(error);
              }
            );
        },
        error => {
          console.error(error);
        }
      )
  }

  private getRandomCoordinates(featureCollection: Object): Object {
    let features = featureCollection["features"];
    let randomCityFeature = features[Math.floor(Math.random() * features.length)];
    return randomCityFeature.geometry.coordinates;
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
      .duration(3000)
      .style("opacity", 1)
      .transition()
      .duration(10000)
      .style("opacity", 0)
      .remove()
  }

}
