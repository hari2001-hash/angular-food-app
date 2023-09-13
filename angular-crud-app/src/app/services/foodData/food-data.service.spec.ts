import { TestBed } from '@angular/core/testing';

import { FoodDataService } from './food-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('FoodDataService', () => {
  let service: FoodDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule ],

    });
    service = TestBed.inject(FoodDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
