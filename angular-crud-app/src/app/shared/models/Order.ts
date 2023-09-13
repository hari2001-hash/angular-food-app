import { CartItem } from "./CartItem";
import { UserOrders } from "./UserOrders";

export class Order{

  id!:number;
  userOrders!:UserOrders;
  // cart!:CartItem;
  constructor(id:number,useDat:any){

    this.id=id;
    this.userOrders=useDat;
  }

}




