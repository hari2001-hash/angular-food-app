import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// import {FormGroup,FormBuilder} from '@angular/forms'
import {FormBuilder, Validators} from '@angular/forms'
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { Register } from '../shared/models/Register';
import { RegisterDataService } from '../services/register/register-data.service';
import { HotelNameServService } from '../hotel-name.service';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{
  regDatas:Register[]=[];
  userData:any;
  unameArr:string[]=[];
  emailArr:string[]=[];
  userIdArr:number[]=[];
  userNameFromForm:string="";
  emailFromForm:string="";
  passwordFromForm:string="";
  idIndex:number=0;
  userid:number=0;
  editMode:boolean=false;
  fetchData(){
    this.service.fetchData2().subscribe((reg)=>{
      this.regDatas=reg;
    })
    this.service.fetchData1().subscribe(data=>{
      this.userData=data;
      for(let userDe of this.userData){
        let register=new Register(userDe);
        // console.log(register.uname);
        this.unameArr.push(register.uname);
        this.emailArr.push(register.password);
        this.userIdArr.push(register.id);

        // console.log("id's: "+register.id);

      }
    })



    if(this.forgotForm.controls['uname'].value){
       this.userNameFromForm=this.forgotForm.controls['uname'].value;
      }
      if(this.forgotForm.controls['email'].value){
        this.emailFromForm=this.forgotForm.controls['email'].value;
      }
      if(this.forgotForm.controls['password'].value){
        this.passwordFromForm=this.forgotForm.controls['password'].value;
      }
      // console.log(this.userNameFromForm+" "+this.passwordFromForm);

      //Checks for similar uname,phoneNum and emailId from json Server

      //Admin login

      for(let i=0;i<this.unameArr.length;i++){
        if(this.unameArr[i]===this.userNameFromForm){
          this.idIndex=i;
        }
      }
      for(let i=0;i<this.userIdArr.length;i++){
        this.userid=this.userIdArr[this.idIndex];
      }
      this.updatePass();

      console.log(this.userid);
      if((this.unameArr.includes(this.userNameFromForm)) && (this.emailArr.includes(this.emailFromForm))){
        this.updatePass();
     }
  }
  updatePass(){
    let currentUser=this.regDatas.find((r)=>{ return r.id===this.userid})

    if(currentUser?.password){
      // Object.assign(currentUser!.password,this.forgotForm.controls['password'].value);

    }



    this.forgotForm.setValue({  fname:this.userNameFromForm,uname:this.userNameFromForm,
    email:this.emailFromForm,phoneNum:<string>currentUser?.phoneNum,
    password:this.passwordFromForm,conPass:<string>currentUser?.conPass,address1:<string>currentUser?.address1,
  address2:<string>currentUser?.address2
  });
    this.service.changePassword(this.userid,<any>this.forgotForm.value);
    this.router.navigate(['login']);
  }
  forgotForm=this.fb.group({
    fname:'',
    uname:'',
    email:'',
    phoneNum:'',
    password:'',
    conPass:'',
    address1:'',
    address2:'',

  })
  constructor(private fb:FormBuilder,private service:RegisterDataService,private router:Router){
  }
  ngOnInit(): void {

  }


}



