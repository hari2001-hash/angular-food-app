import { TestBed } from '@angular/core/testing';

import { HotelNameServService } from './hotel-name.service';

describe('HotelNameService', () => {
  let service: HotelNameServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelNameServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
