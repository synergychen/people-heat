import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-configuration-card',
  templateUrl: './configuration-card.component.html',
  styleUrls: ['./configuration-card.component.sass']
})
export class ConfigurationCardComponent implements OnInit {

  @Output() paused = new EventEmitter<boolean>();

  stop: boolean;

  constructor() { }

  ngOnInit() {
  }

  pause(): void {
    this.stop = true;
    this.paused.emit(this.stop);
  }

  resume(): void {
    this.stop = false;
    this.paused.emit(this.stop);
  }

}
