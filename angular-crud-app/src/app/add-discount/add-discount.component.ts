import { Component } from '@angular/core';
import { Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {EmployeeService} from '../services/employee.service'
import { EmpAddEditComponent } from '../hotel-add-edit/emp-add-edit.component';
import {NgIf, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';

@Component({
  selector: 'app-add-discount',
  templateUrl: './add-discount.component.html',
  styleUrls: ['./add-discount.component.css'],

})

export class AddDiscountComponent implements OnInit {

  empForm: FormGroup;

  cuisine: string[] = [
    'Chinese',
    'south Indian',
    'Western',
    'North Indian',
    'Classic',
  ];

  constructor(
    private _fb: FormBuilder,
    private _empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    // private _coreService: CoreService,
    private router:Router,

  ) {

    this.empForm = this._fb.group({
      id:[''],
      start:[''],
      end:[''],
      startTime:[''],
      endTime:[''],
      discountPercent:[''],
      discountType:[''],
      disCount:[''],

    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateOffers(this.empForm.value)
          .subscribe({
            next: (val: any) => {
              // this._coreService.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      }
      else {
        this._empService.addOffers(this.empForm.value).subscribe({
          next: (val: any) => {
            // this._coreService.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }

}












