import { CartItem } from "./CartItem";

export class Cart{
  id:number=1;
  items:CartItem[]=[];

  get totalPrice():number{
    let totalPrice=0;
    this.items.forEach(item=>{
      totalPrice+=item.price;
    });
    return totalPrice;
  }
}
