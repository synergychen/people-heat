import { City } from './city.model';
import { Country } from './country.model';

export class CountriesList {
  list: Country[] = [];
  top10: Country[] = [];

  constructor() { }

  update(city: City): void {
    let country = this.find(city);

    if (!country) {
      this.list.push(new Country(city.country))
    } else {
      country.increment();
    }

    this.updateTop10();
  }

  private find(city: City) {
    return this.list.filter(country => country.name == city.country)[0];
  }

  private updateTop10(): void {
    this.list.sort((a, b) => a.count > b.count ? -1 : 1);
    this.top10 = this.list.slice(0, 10);
  }

}
