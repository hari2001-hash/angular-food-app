import { Component, Input } from '@angular/core';
// import { RegisterDataService } from '../register-data.service';
import { Router } from '@angular/router';
// import { HotelNameServService } from '../hotel-name-serv.service';
// import { TopBrandService } from '../top-brand.service';
import { Food } from '../shared/models/Food';
import { HotelFood } from '../shared/models/HotelFood';
import { CartService } from '../services/cart/cart.service';
import { FoodDataService } from '../services/foodData/food-data.service';
import { HotelNameServService } from '../hotel-name.service';
import { TopBrandService } from '../services/topbrand/top-brands.service';
import { RegisterDataService } from '../services/register/register-data.service';
import { HotelFoodsService } from '../services/hotelFoods/hotel-foods.service';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.css']
})
export class HotelPageComponent {
  offerDetails:any;
  startDate:any;
  endDate:any;
  startTime:any;
  endTime:any;
  descPercent:any;
  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;
  hotelfood:HotelFood[]=[];
  foods:Food[]=[];
  itemsAndCount:any={
    "Idly":2,
    "Poori":4,
    "Pongal":1
  }
  userOrd:any;
  userData:any;
  toTheHeader:any="";
  @Input() hNameFrombestFoods:string=""
  count:number=0;
  dataHotel:any;
  constructor(private hotel:FoodDataService,private service:RegisterDataService,private router:Router,private hotelNam:HotelNameServService,private brandService:TopBrandService,private foodService:FoodDataService,private hService:HotelFoodsService,private cartService:CartService,private employee:EmployeeService){

  }
  ngOnInit():void{
    this.employee.getOffers().subscribe(data=>{
      this.offerDetails=data;
      this.endDate="d"+JSON.stringify(data[0].end);
      this.endDate=this.offerDetails[0].end;
      this.endTime=this.offerDetails[0].endTime;
      let dateAlone=this.endDate.slice(0,10);
      let endT=this.endTime+":00";
      this.descPercent=this.offerDetails[0].discountPercent.slice(0,2);
      this.descPercent=Number(this.descPercent);
      const offerEndTime = new Date(dateAlone+"T"+endT);
      setInterval(() => {
        const currentTime = new Date().getTime();
        const timeDifference = offerEndTime.getTime() - currentTime;

        this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
      }, 1000);

      this.hotelfood=this.hService.getAll();
      // console.log(this.hotelfood);


    })

    // const offerEndTime = new Date("2023-07-05T03:22:00");





  }

  getHotelData(hNameFrombestFoods:string){
    this.hotel.fetchDish(hNameFrombestFoods).subscribe(data=>{
      this.dataHotel=data;


    })
  }


  pushData(itemAndCoun:any){
    this.service.addOrderDetails(itemAndCoun).subscribe(data=>{
      console.log("data inserted");

    })
  }
  pulluserData(){
    this.service.fetchData().subscribe(data=>{
      // console.log(data);
      this.userData=data;

    })
  }
  addToCart(id:number){
    this.cartService.addToCart(this.hotelfood[id-1]);
    this.router.navigateByUrl('/cart')
  }


}
