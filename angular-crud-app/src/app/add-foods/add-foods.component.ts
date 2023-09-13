import { Component, Inject, OnInit, Optional, ViewChild } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { CoreService } from '../core/core.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-add-foods',
  templateUrl: './add-foods.component.html',
  styleUrls: ['./add-foods.component.scss'],

})
export class AddFoodsComponent implements OnInit{
  selectedHName:string='';
  dishForm: FormGroup;

  value = 'Clear me';

  hNameArr:string[]=[];




  constructor(private _empService:EmployeeService,
    private _fb: FormBuilder,
    // private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    // private _coreService: CoreService,
    private router:Router,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
    )
    {
      this.dishForm = this._fb.group({

        hotelName:'',
        dishName:'',
        dishImg:'',
        dishQuantity:'',
        unitcost:'',


      });
    }
  ngOnInit(): void {
    this.getEmployeeList();
    this.dishForm.patchValue(this.data);
  }
  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        // console.log("res: "+JSON.stringify(res));
        for(let result of res){
          // console.log(result);
          this.hNameArr.push(result.hotelName);


        }
        this.hNameArr.forEach((data)=>{
          // console.log("hName: "+data);

        })

      },
      error: console.log,
    });
  }

  onDishSubmit(){
    console.log(this.dishForm.controls['hotelName'].value);

    let suit= this.dishForm.controls['hotelName'].value.split(" ").join("")

    if (this.dishForm.valid) {
        this._empService.addFoodItems(this.dishForm.value,suit).subscribe({
          next: (val: any) => {
            // this._coreService.openSnackBar('Employee added successfully');
            // this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });

    }
  }
}
