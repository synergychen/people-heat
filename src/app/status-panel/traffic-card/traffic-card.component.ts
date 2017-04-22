import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traffic-card',
  templateUrl: './traffic-card.component.html',
  styleUrls: ['./traffic-card.component.sass']
})
export class TrafficCardComponent implements OnInit {

  countriesList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.countriesList = [
      { name: "China", count: 78 },
      { name: "US", count: 100 },
      { name: "UK", count: 60 },
      { name: "South Korea", count: 66 },
      { name: "Italy", count: 36 },
      { name: "Taiwan", count: 40 },
      { name: "Turkey", count: 52 },
    ];
  }

}
