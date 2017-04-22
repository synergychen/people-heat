import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-card',
  templateUrl: './live-card.component.html',
  styleUrls: ['./live-card.component.sass']
})
export class LiveCardComponent implements OnInit {

  list: any[] = [];

  constructor() { }

  ngOnInit() {
    this.list = [
      { timestamp: new Date(), country: "US", city: "New York" },
      { timestamp: new Date(), country: "China", city: "Shanghai" },
      { timestamp: new Date(), country: "UK", city: "London" },
    ];
  }

}
