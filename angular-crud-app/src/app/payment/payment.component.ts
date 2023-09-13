import { OnInit } from '@angular/core';
import { Component,VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleGroup } from 'toggle-group';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { Order } from '../shared/models/Order';
import { HotelNameServService } from '../hotel-name.service';
import { RazorpayService } from '../services/paymentIntegration/razorpay.service';
import { Register } from '../shared/models/Register';
import { RegisterDataService } from '../services/register/register-data.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],

})
export class PaymentComponent implements OnInit{
  userId:number=0;
  cardnumberPattern:string="/^4{1}[0-9]{3}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{1}$/";
  paymentForms=this.fb.group({
    cardNumber:["",[Validators.required],Validators.pattern(this.cardnumberPattern)],
    expirationDate:["",[Validators.required]],
    cvv:["",[Validators.required]],
    amount:[""],
  })

  totalCost:number=0;
  oldHis:any;
  regDatas:Register[]=[];
  tabTitles = ['cash-on-delivery', 'UPI', 'card-payment'];
  name = 'Angular ' + VERSION.major;
   // ToggleGroup for controlling tobar tabs
   tg = new ToggleGroup(this.tabTitles).dropOpen('cash-on-delivery');

   sect = new ToggleGroup([
     { key: 'One', value: true },
     { key: 'Two', value: true },
     { key: 'Three', value: false },
     { key: 'Four', value: true },
     { key: 'Five', value: true },
   ]);
toggleMode() {
throw new Error('Method not implemented.');
}
totalPrice!:number;
  cartItems: CartItem[] = [];
cartItem:string[]=[];
cartItemQunatity:number[]=[];
  cardNumber!: string;
  expirationDate!: string;
  cvv!: string;
  amount!: number;
  userData:any;
  hisOrderArr:any[]=[];
  fromHistory:any;
  whole:any;
currentMode: string|string[]|Set<string>|{ [klass: string]: any; }|null|undefined;
  constructor(private fb:FormBuilder,private router: Router,private razorpayService: RazorpayService,private hnam:HotelNameServService,private cartser:CartService,private service:RegisterDataService) {
    //commented while testing console.log("itemName cart arr: "+this.router.getCurrentNavigation()?.extras.state?.['cartArr'][0]); // should log out 'bar'
    // for(let cartIte of this.router.getCurrentNavigation()?.extras.state?.['cartArr']){
    //   this.cartItem.push(cartIte);
    // }

    // for(let usId of this.router.getCurrentNavigation()?.extras.state?.['quanityArr']){
    //   this.cartItemQunatity.push(usId);
    // }

    this.totalCost=this.router.getCurrentNavigation()?.extras.state?.['example'];



    this.cartItems=(this.router.getCurrentNavigation()?.extras.state?.['cartItemsa']);
    // let order =new Order(4,[{dishName:this.cartItem},
    //   {dishQuantity:this.cartItemQunatity},{totalPrice:this.totalCost},{isPaymentDone:true}]);
    //   console.log(order);
    //   console.log(this.userId);



  }
  ngOnInit(): void {

        this.hnam.currId.subscribe((data)=>{
          this.userId=data;
        })
        console.log(this.userId);

        this.service.fetchData2().subscribe((reg)=>{
        this.regDatas=reg;
        let currentUser=this.regDatas.find((r)=>{ return r.id===this.userId});
        console.log(currentUser);

      })






  }
  processPayment() {
    // Perform payment processing logic here
    // console.log('Payment processed successfully!');
  }

  callRazor(totPrice:number){
    this.totalPrice=totPrice;
    this.razorpayService.initiatePayment(totPrice);
  }

  goToSuccess(){

    this.hnam.currId.subscribe((data)=>{
      this.userId=data;
    })
    console.log(this.userId);

    this.service.fetchData2().subscribe((reg)=>{
    this.regDatas=reg;
    let currentUser=this.regDatas.find((r)=>{ return r.id===this.userId});
    console.log(currentUser);
    const today=new Date();
    const date=today.getDate()+"-"+today.getMonth()+"-"+today.getFullYear();
    const time=today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
    let ctit={
      fname: currentUser?.uname,
      uname: currentUser?.uname,
      email: currentUser?.email,
      phoneNum: currentUser?.phoneNum,
      password: currentUser?.password,
      conPass: currentUser?.conPass,
      address1: currentUser?.address1,
      address2: currentUser?.address2,
      id: this.userId,
      userOrder:[ {itemArr:this.cartItem,
        quantityArr:this.cartItemQunatity,
        totalPrice:this.totalCost,
        paymentStatus:true,
        orderDate:date,
        orderTime:time
      }
      ]
    }
    this.cartser.getAllItems(this.userId).subscribe(data=>{
      // console.log(data);
      this.userData=data;
      // console.log(this.userData.userOrder[0]);
      this.hisOrderArr.push(this.userData.userOrder[0]);
      this.cartser.getOrderHis(this.userId).subscribe(data=>{
        // console.log(data);
        this.fromHistory=data;
        // console.log(this.fromHistory.userOrder[0]);
        this.hisOrderArr.push(this.fromHistory.userOrder[0]);
        // console.log(this.hisOrderArr);
        this.cartser.pushOrderHis(this.userId,this.hisOrderArr).subscribe(data=>{
          // console.log(data);

        })

        // this.hisOrderArr.push(this.fromHistory.userorder[0]);
        // console.log(this.hisOrderArr);

      })
    })
    this.cartser.placeOrder(this.userId,ctit).subscribe(data=>{
      // console.log(data);

    });

    // this.cartser.getAllItems(this.userId).subscribe(data=>{
    //   // console.log(data);
    //   this.orderHistory=data;
    //   console.log(this.orderHistory);
    // })



  })


  console.log(this.regDatas);


      this.router.navigate(['/success'],{ queryParams: { items: this.cartItems}})
  }

  }






