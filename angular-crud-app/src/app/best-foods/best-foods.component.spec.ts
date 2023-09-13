import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestFoodsComponent } from './best-foods.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BestFoodsComponent', () => {
  let component: BestFoodsComponent;
  let fixture: ComponentFixture<BestFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestFoodsComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule ],
      schemas: [NO_ERRORS_SCHEMA]


    })
    .compileComponents();

    fixture = TestBed.createComponent(BestFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
