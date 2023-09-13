import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TopBrandService } from '../services/topbrand/top-brands.service';
@Component({
  selector: 'app-top-brands',
  templateUrl: './top-brands.component.html',
  styleUrls: ['./top-brands.component.css']
})
export class TopBrandsComponent implements OnInit {
  indiresponse:any;

  constructor(private brand:TopBrandService){

  }
  ngOnInit(): void {
    // this.getTopBrands()8.6.23;
    // this.indiresponse=this.topBrandService.getAllBrandData();
    // console.log(this.indiresponse);

  }
  brands:any=[];
  getTopBrands(){
    this.brand.getAllBrandData().subscribe((data: any)=>{
      // console.log(data);
      this.brands=data;
    })
  }

}


