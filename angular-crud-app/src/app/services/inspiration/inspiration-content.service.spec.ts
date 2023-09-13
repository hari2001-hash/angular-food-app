import { TestBed } from '@angular/core/testing';

import { InspirationContentService } from './inspiration-content.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('InspirationContentService', () => {
  let service: InspirationContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule ],

    });
    service = TestBed.inject(InspirationContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
