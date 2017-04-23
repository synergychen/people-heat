export class City {
  id: string;
  name: string;
  latitude: number;
  longitude: number;

  constructor(data) {
    this.id = data.id;
    this.name = data.properties.city;
    this.latitude = data.geometry.coordinates[1];
    this.longitude = data.geometry.coordinates[0];
  }
}
