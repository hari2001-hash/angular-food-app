import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Food } from '../shared/models/Food';
import { OnInit } from '@angular/core';
import { HotelNameServService } from '../hotel-name.service';
import { FoodDataService } from '../services/foodData/food-data.service';
import { HoverHighlightDirective } from '../hover-highlight.directive';
@Component({
  selector: 'app-best-foods',
  templateUrl: './best-foods.component.html',
  styleUrls: ['./best-foods.component.css']
})
export class BestFoodsComponent implements OnInit{
  foods:Food[]=[];
  display:boolean=false;
  msgToChild:string="";
  ngOnInit():void{
    // this.getUserData();
    this.foods=this.foodService.getAll();

    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
        this.foods=this.foodService.getAll().filter
      (food=>food.hotelName.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      // else if(params['tag'])
      //   this.foods=this.foodService.getAllFoodsByTag(params['tag']);
      else{
        this.foods=this.foodService.getAll();
      }

    })
    this.getDish();
  }
  constructor(private foodService:FoodDataService,private routes:Router,private hotelNam:HotelNameServService,private route:ActivatedRoute){
  }

  // 11-06-23
  // rawContent:any=[];
  // getUserData():Food[]{
  //   this.foodService.fetchData().subscribe(data=>{
  //     console.log("data: "+data);

  //     this.result=data;
  //     for(var i=0;i<this.result.length;i++){
  //       let foodData=new Food(this.result[i]);
  //       let flag=false;

  //       for(var j=0;j<this.resFood.length;j++){
  //         if(this.resFood[j].name===foodData.name){
  //           flag=true;
  //         }
  //       }
  //       if(!flag){
  //         this.resFood.push(foodData);
  //       }
  //     }
  //     // this.rawContent=data;11-06-23
  //   })
  //   console.log("result: "+this.result);


  //   return this.resFood;
  // }
    // 11-06-23


  summada:any;

  clickMessage(hotelname:string){
    this.msgToChild=hotelname;
    this.hotelNam.changeMessage(this.msgToChild);

    // alert(this.msgToChild);
    this.display=true;
        this.routes.navigateByUrl('/hotel');



  }

  getDish(){
    // this.foodService.fetchDish().subscribe(data=>{
    //   // alert(data);
    //   this.summada=data;
    // })
  }
}




