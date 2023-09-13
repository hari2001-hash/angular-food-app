import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from '../ConfirmedValidator';
import { Register } from '../shared/models/Register';
import { RegisterDataService } from '../services/register/register-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  emailPattern:string="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  phonePattern:string="/^(?!.*(.)/1{9})[6-9]\d{9}$/";
  passwordPattern:string="";
  constructor(private fb:FormBuilder,private service:RegisterDataService){

  }


  registerForms=this.fb.group({
    fname:["",[Validators.required,Validators.pattern(/^[A-Za-z]+$/)]],
    uname:["",[Validators.required]],
    email:["",[Validators.required,Validators.pattern(this.emailPattern)]],
    // phoneNum:["",[Validators.required,Validators.pattern(this.phonePattern)]],
    phoneNum:['',[Validators.required,Validators.minLength(6),Validators.pattern(/^(?!.*(.)\1{9})[6-9]\d{9}$/)]],
    password:["",[Validators.required,Validators.pattern(this.passwordPattern)]],
    conPass:["",[Validators.required]],
    address1:["",[Validators.required]],
    address2:["",[Validators.required]]
  },{validator: ConfirmedValidator('password', 'conPass')})



  addUser(){
    this.service.addUser(this.registerForms.value).subscribe(data=>{
      alert(data);
    })
  }

  userData:any;
  unameArr:any[]=[];
  phoneNumArr:any[]=[];
  emailArr:any[]=[];
  userNameFromForm:string="";
  phoneNumFromForm:string="";
  emailFromForm:string=""
  fetchData(){
    this.service.fetchData().subscribe(data=>{
      // console.log(data);
      this.userData=data;
      let register=new Register(this.userData);

      for(let dat of this.userData){
        this.unameArr.push(dat.uname);
        this.phoneNumArr.push(dat.phoneNum);
        this.emailArr.push(dat.email);
      }
      if(this.registerForms.controls['uname'].value){
       this.userNameFromForm=this.registerForms.controls['uname'].value;
      }
      if(this.registerForms.controls['phoneNum'].value){
        this.phoneNumFromForm=this.registerForms.controls['phoneNum'].value;
      }
      if(this.registerForms.controls['email'].value){
        this.emailFromForm=this.registerForms.controls['email'].value;
      }
      // console.log(this.userNameFromForm);
      // console.log(this.unameArr);
      // console.log(this.unameArr.includes(this.userNameFromForm));
      //Checks for similar uname,phoneNum and emailId from json Server
      if((this.unameArr.includes(this.userNameFromForm)) || (this.phoneNumArr.includes(this.phoneNumFromForm)) || this.emailArr.includes(this.emailFromForm)){
        alert("You are already a user so go login")//Should direct to login page
      }
      else{
        this.addUser();
      }

    })

  }

}
