import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post(environment.restaurants, data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    // return this._http.put(`http://localhost:3000/restaurants/${id}`, data);
    return this._http.put(environment.restaurants+`/${id}`, data);

  }

  getEmployeeList(): Observable<any> {
    return this._http.get(environment.restaurants);
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(environment.restaurants+`/${id}`);
  }

  addFoodItems(data:any,hName:string): Observable<any>{
    return this._http.post(environment.baseUrl+`/${hName}`,data);
  }
  addOffers(data:any): Observable<any>{
    return this._http.post(environment.baseUrl+"/offers",data);
  }

  getOffers():Observable<any>{
    return this._http.get(environment.baseUrl+"/offers");
  }

  updateOffers(data:any):Observable<any>{
    return this._http.put(environment.baseUrl+"/offers/1",data);
  }


}
