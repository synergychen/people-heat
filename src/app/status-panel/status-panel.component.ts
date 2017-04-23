import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  @Output() paused = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onPause(event): void {
    this.paused.emit(event);
  }

}
