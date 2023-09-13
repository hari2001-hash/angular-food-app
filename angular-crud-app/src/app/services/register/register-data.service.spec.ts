import { TestBed } from '@angular/core/testing';

import { RegisterDataService } from './register-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterDataService', () => {
  let service: RegisterDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule ],

    });
    service = TestBed.inject(RegisterDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
