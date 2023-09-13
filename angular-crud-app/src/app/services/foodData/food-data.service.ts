
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Food } from './shared/models/Food';
import { Food } from 'src/app/shared/models/Food';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {
  result:any;
  resFood:Food[]=[];
  baseUrl:any=environment.baseUrl;
  constructor(private http:HttpClient) { }




  fetchData(){
    return this.http.get(environment.restaurants)
  }

  fetchDish(hNameFrombestFoods:string){
    return this.http.get(this.baseUrl+"/"+hNameFrombestFoods)
  }

  getDataFromDB(){
    return this.http.get(environment.restaurants);
  }
  getAll():Food[]{

    this.getDataFromDB().subscribe(data=>{
      console.log("data :"+data);

      this.result=data;
      console.log("result :"+JSON.stringify(this.result[0]));

      for(var i=0;i<this.result.length;i++){
        let foodData = new Food(this.result[i]);
        let flag=false;
       for(let j=0;j<this.resFood.length;j++){
        if(this.resFood[j].hotelName===foodData.hotelName){
          flag=true;
        }

       }
       if(!flag){
        this.resFood.push(foodData);

       }

      }
    });

    return this.resFood;


  }

  getAllFoodsBySearchTerm(searchTerm:string):Food[]{
    return this.getAll().filter(food=>{
      food.hotelName.toLowerCase().includes(searchTerm.toLowerCase());
    })
  }

}
