export class Country {
  name: string;
  count: number = 1;

  constructor(name) {
    this.name = name;
  }

  increment(): void {
    this.count += 1;
  }
}
