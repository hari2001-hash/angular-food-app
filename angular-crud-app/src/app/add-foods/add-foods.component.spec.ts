import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodsComponent } from './add-foods.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA, forwardRef } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';

describe('AddFoodsComponent', () => {
  let component: AddFoodsComponent;
  let fixture: ComponentFixture<AddFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoodsComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule,MatDialogModule],
      providers: [
        EmployeeService,FormBuilder,Router,
        { provide: MAT_DIALOG_DATA, value: {} },
        { provide: MatDialogRef, value: {} },
        {provide: NG_VALUE_ACCESSOR},
    ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,

    ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
