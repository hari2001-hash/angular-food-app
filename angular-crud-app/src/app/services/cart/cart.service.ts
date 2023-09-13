import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { HotelFood } from 'src/app/shared/models/HotelFood';
import { Order } from 'src/app/shared/models/Order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalItemCount:number=0;
  userId!:number;
  constructor(private http:HttpClient){

  }

  private cart:Cart=new Cart();


  addToCart(hotelfood:HotelFood):void{
    let cartItem=this.cart.items.find(item=>item.food.id===hotelfood.id);
    if(cartItem){
      this.changeQuntity(hotelfood.id,cartItem.quantity+1);
      return;
    }
    this.cart.items.push(new CartItem(hotelfood));
  }

  removeFromCart(foodId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.food.id!=foodId);
  }
  changeQuntity(foodId:number,quantity:number){
    let cartItem=this.cart.items.find(item=>item.food.id===foodId);
    if(!cartItem){
      return;
    }
    cartItem.quantity+=quantity;
  }

  getCart():Cart{
    return this.cart;
  }

  // getCart():any{
  //   return 200;
  // }



  placeOrder(id:number,dataToPass:any) {
    // alert("data posted");
      return this.http.put(environment.registerDomain+id,dataToPass);
      //all API url's are dynamically fetched from environment files
  }
  getAllItems(id:number){
    return this.http.get(environment.registerDomain+id);
  }

  getOrderHis(id:number){
    return this.http.get(environment.orderHistoryDomain+id);

  }

  pushOrderHis(id:number,data:any){
    return this.http.put(environment.orderHistoryDomain+id,data)
  }


}
