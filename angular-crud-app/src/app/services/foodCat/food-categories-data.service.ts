import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FoodCategoriesDataService {
  url:string=environment.baseUrl+"/foodCategories"

  constructor(private http:HttpClient) { }



}
