import { TestBed } from '@angular/core/testing';

import { WheaterAPIService } from './wheater-api.service';

describe('WheaterAPIService', () => {
  let service: WheaterAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheaterAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
