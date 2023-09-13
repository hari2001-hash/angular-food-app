import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from 'src/app/shared/models/Register';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

url:string=environment.registerDomain;
constructor(private http:HttpClient){

}

addUser(body:Register){
  return this.http.post(this.url,body)
}
fetchData(){
  return this.http.get(this.url);
}

fetchData1():Observable<Register>{
  return this.http.get<Register>(this.url);
}
fetchData2(){
  return this.http.get<any>(this.url);

}

addOrderDetails(data:any){
  return this.http.post(this.url,data)
}

changePassword(id:number,data:Register){
   this.http.put(this.url+id,data).subscribe();
   alert("your password changes successfully");
}



getUserDetails(id:number){
  return this.http.get(this.url+"/"+id);

}
}






