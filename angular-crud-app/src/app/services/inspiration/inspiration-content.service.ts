import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InspirationContentService {
  url:any=environment.baseUrl+"/inspiration"

  constructor(private http:HttpClient) { }

  fetchInspirationContent(){
    return this.http.get(this.url);
  }
}
