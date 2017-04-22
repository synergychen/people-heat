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

  constructor(
    private heatMapService: HeatMapService
  ) { }

  ngOnInit() {
    let projection = d3.geoMercator()
      .scale((this.width + 1) / 2 / Math.PI)
      .translate([this.width/2, this.height/2])
      .precision(0.1);
    let g = d3.select("#heat-map-g");
    let path = d3.geoPath()
      .projection(projection);

    this.heatMapService.getTopology()
      .subscribe(
        topology => {
          let features = this.topo
            .feature(topology, topology.objects.countries)
            .features;

          g.selectAll("path")
            .data(features)
            .enter()
            .append("path")
            .attr("d", path)
        },
        error => {
          console.error(error);
        }
      )

  }

}
