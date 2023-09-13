
import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { AuthService } from '../service/Payment/auth.service';
import { RazorpayService } from '../services/paymentIntegration/razorpay.service';
import { Food } from '../shared/models/Food';
import { Order } from '../shared/models/Order';
import { HotelNameServService } from '../hotel-name.service';
import { EmployeeService } from '../services/employee.service';
declare var Rozorpay:any;

interface Post{
  id:number,
};
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  offerDetails:any;
  startDate:any;
  endDate:any;
  startTime:any;
  endTime:any;
  descPercent:any;
  cartItemArr:string[]=[];
  cartItemQuantityArr:number[]=[];
  userName:string="";
    days!: number;
    hours!: number;
    minutes!: number;
    seconds!: number;
  cart!:Cart;
  post!:Post;
  constructor(private cartservice:CartService,private auth:AuthService,private hotelNam:HotelNameServService,private razorpayService: RazorpayService,private router:Router,private employee:EmployeeService,private route:ActivatedRoute){
    this.setCart();
    console.log("route", this.route);

  }
  ngOnInit(): void {
    this.userName=this.route.snapshot.data['resolvedData'];
    console.log("userName from cart page 1..:"+this.userName);

     // Atlast uncomment this
      // if(uName=="null"){
      //   this.router.navigate(['login']);
      // }
    // this.userName=this.route.snapshot.resolvedData
    // this.hotelNam.currUname.subscribe(uName=>{
    //   this.userName=uName;
    //   // console.log("from cart: "+this.userName);
    //   // Atlast uncomment this
    //   // if(uName=="null"){
    //   //   this.router.navigate(['login']);
    //   // }
    // });
    this.hotelNam.currentMessage.subscribe(hName=>{
      });
      this.employee.getOffers().subscribe(data=>{
        // console.log("Offes data from db: "+JSON.stringify(data));
        // console.log(JSON.stringify(data[0].end));
        this.offerDetails=data;
        this.endDate="d"+JSON.stringify(data[0].end);
        // console.log(this.offerDetails[0].end);
        this.endDate=this.offerDetails[0].end;
        this.endTime=this.offerDetails[0].endTime;
        // console.log(this.endDate);
        let dateAlone=this.endDate.slice(0,10);
        // console.log(dateAlone);
        let endT=this.endTime+":00";
        // console.log(endT);
        // console.log(dateAlone+"T"+endT);
        this.descPercent=this.offerDetails[0].discountPercent.slice(0,2);
        this.descPercent=Number(this.descPercent);
        // console.log(this.descPercent);
        const offerEndTime = new Date(dateAlone+"T"+endT);
        setInterval(() => {
          const currentTime = new Date().getTime();
          const timeDifference = offerEndTime.getTime() - currentTime;

          this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        }, 1000);

        setInterval(() => {
          const currentTime = new Date().getTime();
          const timeDifference = offerEndTime.getTime() - currentTime;
          this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
          this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
          this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        }, 1000);

      })



  }
  removeFromCart(cartItem:CartItem){
    this.cartservice.removeFromCart(cartItem.food.id);
    this.setCart();
    this.canDeactivates();
  }
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartservice.changeQuntity(cartItem.food.id,quantity);
    this.setCart();
  }
  setCart(){
    this.cart=this.cartservice.getCart();
    //  this.post=this.cartservice.getCart();
    //  return this.post;
  }

  payNow(totPrice:number,cartItem:CartItem[]){
    this.cartservice.totalItemCount=this.cart.items.length;
    console.log(this.cartservice.totalItemCount);

    for(let cartItems of this.cart.items){

      this.cartItemArr.push(cartItems.food.dishName);
      this.cartItemQuantityArr.push(cartItems.quantity);
    }

    this.router.navigate(['payment'],{ state: { example: totPrice,cartArr:this.cartItemArr,quanityArr:this.cartItemQuantityArr,cartItemsa:cartItem}})
  // this.razorpayService.initiatePayment(totPrice);

  }


  incrementCount(id:number){
    this.cartservice.changeQuntity(id,1);
  }

  decrementCount(id:number){
    this.cart.items.map((item)=>{
      if(item.food.id===id){
        if(item.quantity<=1){
          this.cartservice.removeFromCart(item.food.id);
        }
        else{
          this.cartservice.changeQuntity(id,-1);
        }
      }
    })
  }
  canDeactivates(){
    return new Promise((resolve,reject)=>{
      resolve(confirm("Do you want to remove the item"))
    })
  }
  canDeactivate(){

  }
}











