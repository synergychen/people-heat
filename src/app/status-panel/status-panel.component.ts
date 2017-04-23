import { Component, OnInit, Input } from '@angular/core';

import { City } from '../shared/city.model';
import { Country } from '../shared/country.model';

@Component({
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.sass']
})
export class StatusPanelComponent implements OnInit {

  @Input() countries: Country[];
  @Input() cities: City[];

  constructor() { }

  ngOnInit() {
  }

}
