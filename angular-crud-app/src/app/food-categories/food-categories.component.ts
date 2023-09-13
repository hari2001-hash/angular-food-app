import { Component } from '@angular/core';

import { FoodCategoriesDataService } from '../services/foodCat/food-categories-data.service';


@Component({
  selector: 'app-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.css']
})
export class FoodCategoriesComponent {
  obj!: any[];
  constructor(private foodcategory:FoodCategoriesDataService){

  }

  getFoodData(){

  }
}
