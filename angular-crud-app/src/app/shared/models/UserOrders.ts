export class UserOrders{
  dishName:string[]=[];
  dishQuantity:number[]=[];
  totalPrice:number[]=[];
  isPaymentDone:boolean=false;

  constructor(orderDe:any){
    this.dishName=orderDe.dishName;
    this.dishQuantity=orderDe.dishQuantity;
    this.totalPrice=orderDe.totalPrice;
    this.isPaymentDone=orderDe.isPaymentDone;
  }
}
