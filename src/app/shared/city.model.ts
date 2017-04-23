export class City {
  id: string;
  timestamp: Date;
  name: string;
  country: string;
  latitude: number;
  longitude: number;

  constructor(data) {
    this.id = data.id;
    this.name = data.properties.city;
    this.country = this.getCountryByCity(data.properties.city);
    this.latitude = data.geometry.coordinates[1];
    this.longitude = data.geometry.coordinates[0];
  }

  private getCountryByCity(name: string): string {
    // TODO: get country by city
    return name[0] + "***";
  }

}
