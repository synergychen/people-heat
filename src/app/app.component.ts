import { Component, OnInit } from '@angular/core';

import { LocationService } from './shared/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
    // add randon city marker
    this.locationService.getCities()
      .subscribe(
        featureCollection => {
          console.log(featureCollection);
        },
        error => {
          console.error(error);
        }
      );
  }
}
