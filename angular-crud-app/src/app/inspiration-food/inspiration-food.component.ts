import { Component } from '@angular/core';
import { InspirationContentService } from '../services/inspiration/inspiration-content.service';
import { TopBrandsComponent } from '../top-brands/top-brands.component';
@Component({
  selector: 'app-inspiration-food',
  templateUrl: './inspiration-food.component.html',
  styleUrls: ['./inspiration-food.component.css']
})
export class InspirationFoodComponent {
  ngOnInit():void{
    this.fetchIns();
  }
  constructor(private inspitaion:InspirationContentService){
  }
  imgUrlArr:any=[];
  fetchIns(){
    this.inspitaion.fetchInspirationContent().subscribe(data=>{
      // console.log(data);
      this.imgUrlArr=data;
    })
  }


}


