import { Component, OnInit, Input } from '@angular/core';

import { Country } from '../shared/country.model';

@Component({
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.sass']
})
export class StatusPanelComponent implements OnInit {

  @Input() countries: Country[];

  constructor() { }

  ngOnInit() {
  }

}
