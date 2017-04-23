import { Component, OnInit } from '@angular/core';

import { LocationService } from './shared/location.service';
import { City } from './shared/city.model';
import { CountriesList } from './shared/countries-list.model';
import { Country } from './shared/country.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  readonly markerInterval: number = 1000;

  cities: City[] = [];
  city: City;
  countriesList: CountriesList;

  constructor(
    private locationService: LocationService
  ) { }

  ngOnInit() {
    this.countriesList = new CountriesList();
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
    this.city = this.getRandom(this.cities);
    this.countriesList.update(this.city);

    setTimeout(() => {
      this.update();
    }, this.markerInterval);
  }

  private getRandom(cities: City[]): City {
    return cities[Math.floor(Math.random() * cities.length)];
  }
}
