import { Component, OnInit } from '@angular/core';

import { LocationService } from './shared/location.service';
import { City } from './shared/city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  readonly markerInterval: number = 1000;

  cities: City[] = [];
  city: City;

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.locationService.getCities()
      .subscribe(
        cities => {
          this.cities = cities;
          this.refreshCity();
        },
        error => {
          console.error(error);
        }
      );
  }

  private refreshCity() {
    this.city = this.getRandom(this.cities);

    setTimeout(() => {
      this.refreshCity();
    }, this.markerInterval);
  }

  private getRandom(cities: City[]): City {
    return cities[Math.floor(Math.random() * cities.length)];
  }
}
