import { HotelFood } from "./HotelFood";

export class CartItem{
  constructor(food:HotelFood){
    this.food=food;
  }
  food:HotelFood;
  quantity:number=1;
  get price():number{
    return this.food.unitcost*this.quantity;
  }
}
