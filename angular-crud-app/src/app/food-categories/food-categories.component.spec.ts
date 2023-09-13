import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCategoriesComponent } from './food-categories.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('FoodCategoriesComponent', () => {
  let component: FoodCategoriesComponent;
  let fixture: ComponentFixture<FoodCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCategoriesComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
