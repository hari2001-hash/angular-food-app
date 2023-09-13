/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TopBrandService } from './top-brands.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('Service: TopBrands', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopBrandService],
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule ],

    });
  });

  it('should ...', inject([TopBrandService], (service: TopBrandService) => {
    expect(service).toBeTruthy();
  }));
});
