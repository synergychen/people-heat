import { Component, OnInit } from '@angular/core';

import { LocationService } from './shared/location.service';
import { City } from './shared/city.model';
import { LiveCitiesList } from './shared/live-cities-list.model';
import { Country } from './shared/country.model';
import { StatCountriesList } from './shared/stat-countries-list.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  readonly markerInterval: number = 1000;

  cities: City[] = [];
  mostRecentCity: City;
  statCountriesList: StatCountriesList;
  liveCitiesList: LiveCitiesList;

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.statCountriesList = new StatCountriesList();
    this.liveCitiesList = new LiveCitiesList();
    this.locationService.getCities()
      .subscribe(
        cities => {
          this.cities = cities;
          this.update();
        },
        error => {
          console.error(error);
        }
      );
  }

  private update() {
    this.mostRecentCity = this.getRandom(this.cities);
    this.mostRecentCity.timestamp = new Date();
    this.statCountriesList.update(this.mostRecentCity);
    this.liveCitiesList.update(this.mostRecentCity);

    setTimeout(() => {
      this.update();
    }, this.markerInterval);
  }

  private getRandom(cities: City[]): City {
    return cities[Math.floor(Math.random() * cities.length)];
  }
}
