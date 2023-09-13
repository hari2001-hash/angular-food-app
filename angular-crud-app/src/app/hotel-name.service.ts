import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HotelNameServService {
  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();




//User name is stored after log in
  private defUid = new BehaviorSubject<number>(0);
  currId = this.defUid.asObservable();

//User id is stored after log in
private defUnam = new BehaviorSubject<string>("null");
currUname = this.defUnam.asObservable();
  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }
  changeUserName(uname:string){
    this.defUnam.next(uname);
  }
  changeUserId(id:number){
    this.defUid.next(id);
  }

}







