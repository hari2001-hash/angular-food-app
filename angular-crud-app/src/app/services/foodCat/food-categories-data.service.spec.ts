/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodCategoriesDataService } from './food-categories-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('Service: FoodCategoriesData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodCategoriesDataService],
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule ],

    });
  });

  it('should ...', inject([FoodCategoriesDataService], (service: FoodCategoriesDataService) => {
    expect(service).toBeTruthy();
  }));
});
