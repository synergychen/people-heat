/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeatMapService } from './heat-map.service';

describe('HeatMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeatMapService]
    });
  });

  it('should ...', inject([HeatMapService], (service: HeatMapService) => {
    expect(service).toBeTruthy();
  }));
});
