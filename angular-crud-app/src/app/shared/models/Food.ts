export class Food{
  constructor(food:any){
    this.id=food.id;
    this.hotelName=food.hotelName;
    this.cost=food.cost;
    this.rating=food.rating;
    this.imgUrl=food.imgUrl;
    this.cuisine=food.cuisine;
    this.cookTime=food.cookTime;
  }
  id!:number;
  hotelName!:string;
  cost!:number;
  rating:string;
  imgUrl!:string;
  cuisine!:string[];
  cookTime!:string;
}
