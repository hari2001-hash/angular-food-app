import { TestBed } from '@angular/core/testing';

import { HotelFoodsService } from './hotel-foods.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('HotelFoodsService', () => {
  let service: HotelFoodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule ],

    });
    service = TestBed.inject(HotelFoodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
