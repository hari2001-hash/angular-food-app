import { Component, OnInit } from '@angular/core';
import { HotelNameServService } from '../hotel-name.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit{
  empty:string="User";
  userName:string="";
  isLoggedin:boolean=false;
  cartCount:number=0;
  constructor(private hotelNam:HotelNameServService,private router:Router,private authService:AuthService,private cartservice:CartService){}
  ngOnInit(): void {
    this.cartCount=this.cartservice.totalItemCount;
    this.hotelNam.currUname.subscribe(hName=>{
      // console.log(hName);
      this.userName=hName;
      console.log(this.userName);
      if(hName!="null"){
        this.isLoggedin=true;
      }

    });
  }
  emptyUname(){
    this.hotelNam.changeUserName(this.empty);
  }
  logout(){
    this.authService.logout();
  }

  goToHome(){
    this.router.navigate(["/"]);
  }
}
