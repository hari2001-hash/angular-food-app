export class HotelFood{
  constructor(hotFood:any){
    this.dishName=hotFood.dishName;
    this.dishImg=hotFood.dishImg;
    this.dishQuantity=hotFood.dishQuantity;
    this.unitcost=hotFood.unitcost;
    this.id=hotFood.id;
  }

  dishName!: string;
  dishImg!: string;
  dishQuantity!: string;
  unitcost!: number;
  id!: number;

}
