import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-configuration-card',
  templateUrl: './configuration-card.component.html',
  styleUrls: ['./configuration-card.component.sass']
})
export class ConfigurationCardComponent implements OnInit {

  @Output() paused = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  pause(): void {
    this.paused.emit(true);
  }

  resume(): void {
    this.paused.emit(false);
  }

}
