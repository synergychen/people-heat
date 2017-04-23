import { City } from './city.model';

export class LiveCitiesList {
  readonly maxLength = 10;

  list: City[] = [];

  constructor() { }

  update(city: City): void {
    if (this.full()) {
      this.list.pop();
    }

    this.list.unshift(city);
  }

  private full(): boolean {
    return this.list.length == this.maxLength;
  }

}
