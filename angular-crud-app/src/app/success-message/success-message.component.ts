import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from '../shared/models/CartItem';
import { HotelNameServService } from '../hotel-name.service';
import { RegisterDataService } from '../services/register/register-data.service';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit{

  cartItems:CartItem[]=[];
  cartItem:string[]=[];
cartItemQuantity:number[]=[];
userId:number=0;
userData:any=0;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private hnam:HotelNameServService,private service:RegisterDataService){

  }
  ngOnInit(): void {
    this.hnam.currId.subscribe(data=>{
      this.userId=data;
      console.log(this.userId);
      this.success(this.userId);

    })
    }
    success(id:number){

      console.log(this.activatedRoute.snapshot.queryParams['items']);
      console.log(id);
      this.service.getUserDetails(id).subscribe((data)=>{
        // console.log(data);
        this.userData=data;
        // console.log(this.userData.userOrder[0]);
      })

    }
    cancelOrder(){

    }

  }

