import { TestBed } from '@angular/core/testing';

import { VacinadosCovidService } from './vacinados-covid.service';

describe('VacinadosCovidService', () => {
  let service: VacinadosCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacinadosCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
