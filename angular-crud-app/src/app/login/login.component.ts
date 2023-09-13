
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import {Validators} from '@angular/forms'
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Register } from '../shared/models/Register';
import { RegisterDataService } from '../services/register/register-data.service';
import { HotelNameServService } from '../hotel-name.service';
import { AuthService } from '../services/auth.service';
import { NGXLogger } from "ngx-logger";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isLoggedin:boolean=false;
  videoUrl:any="/assets/resources/vid5.mp4";
  loginForm=this.fb.group({
    username:['',Validators.required,Validators.minLength(3)],
    password:[],

  })

  userData:any;
  unameArr:any[]=[];
  passwordArr:any[]=[];
  userIdArr:number[]=[];
  userNameFromForm:any="";
  passwordFromForm:string="";

  fetchData(){
    this.service.fetchData1().subscribe(data=>{
      this.userData=data;
    })
    for(let userDe of this.userData){
      let register=new Register(userDe);
      // console.log(register.uname);
      this.unameArr.push(register.uname);
      this.passwordArr.push(register.password);
      this.userIdArr.push(register.id);

      // console.log("id's: "+register.id);

    }
    // this.userData?.forEach(()=>{})

    if(this.loginForm.controls['username'].value){
       this.userNameFromForm=this.loginForm.controls['username'].value;
      }
      if(this.loginForm.controls['password'].value){
        this.passwordFromForm=this.loginForm.controls['password'].value;
      }
      // console.log(this.userNameFromForm+" "+this.passwordFromForm);

      //Checks for similar uname,phoneNum and emailId from json Server

      //Admin login
      if(this.loginForm.controls['username'].value==="admin" && this.loginForm.controls['password'].value==="admin123"){
        this.authService.adminLogin();
        this.routes.navigate(["admin"]);
      }
      else if((this.unameArr.includes(this.userNameFromForm)) && (this.passwordArr.includes(this.passwordFromForm))){
        // alert("Should direct to Home page")//Should direct to Home page
        this.isLoggedin=true;

        this.unam.changeUserName(this.userNameFromForm);
        for(let i=0;i<this.unameArr.length;i++){
          if(this.unameArr[i]===this.userNameFromForm){
            this.unam.changeUserId(this.userIdArr[i]);

          }
        }
        this.authService.login();

        this.routes.navigate([""]);

      }

      else{
        // alert("Should direct to SignUp page")//Should direct to SignUp page
        this.routes.navigate(["register"]);

      }

  }
  constructor(private fb:FormBuilder,private service:RegisterDataService,private routes:Router,private unam:HotelNameServService,private authService:AuthService,private logger:NGXLogger){
    this.logger.error("Your log message goes here");
    this.logger.warn("Multiple", "Argument", "support");
    this.logger.log("fkjsdghdgf");
  }
  ngOnInit(): void {

  }
  forgotPass(){
    this.routes.navigate(["forgotPassword"]);
  }
}


