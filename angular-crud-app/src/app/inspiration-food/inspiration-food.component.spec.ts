import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationFoodComponent } from './inspiration-food.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('InspirationFoodComponent', () => {
  let component: InspirationFoodComponent;
  let fixture: ComponentFixture<InspirationFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirationFoodComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule ],
      schemas: [NO_ERRORS_SCHEMA]


    })
    .compileComponents();

    fixture = TestBed.createComponent(InspirationFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
