import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotelFood } from 'src/app/shared/models/HotelFood';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HotelFoodsService {
  hotelfood:HotelFood[]=[];
  result:any;

  constructor(private http:HttpClient) { }
  getAll():HotelFood[]{

    this.getDataFromDB().subscribe(data=>{
      this.result=data;
      for(var i=0;i<this.result.length;i++){
        let foodData = new HotelFood(this.result[i]);
        let flag=false;


       for(let j=0;j<this.hotelfood.length;j++){
        if(this.hotelfood[j].dishName===foodData.dishName){
          flag=true;
        }

       }
       if(!flag){
        this.hotelfood.push(foodData);
       }

      }

    });


    return this.hotelfood;



  }
  getDataFromDB(){
    return this.http.get(environment.baseUrl+"/SreeAnnapoorna");
  }
}
