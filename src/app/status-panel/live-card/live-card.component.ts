import { Component, OnInit, Input } from '@angular/core';

import { City } from '../../shared/city.model';

@Component({
  selector: 'app-live-card',
  templateUrl: './live-card.component.html',
  styleUrls: ['./live-card.component.sass']
})
export class LiveCardComponent implements OnInit {

  @Input() cities: City[];

  constructor() { }

  ngOnInit() { }

}
