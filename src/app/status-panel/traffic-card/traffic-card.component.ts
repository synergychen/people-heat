import { Component, OnInit, Input } from '@angular/core';

import { Country } from '../../shared/country.model';

@Component({
  selector: 'app-traffic-card',
  templateUrl: './traffic-card.component.html',
  styleUrls: ['./traffic-card.component.sass']
})
export class TrafficCardComponent implements OnInit {

  @Input() countries: Country[];

  constructor() { }

  ngOnInit() { }

}
