import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HotelNameServService } from 'src/app/hotel-name.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveRouteService implements Resolve<any> {
  userName:String="";
  constructor(private hotelNam:HotelNameServService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any>|Promise<any>|any {
    // return "hari"
    // return new Observable((Observer)=>{
    //   Observer.next(this.hotelNam.currUname.subscribe(uName=>{
    //           this.userName=uName;
    //         }))
    // })
      this.hotelNam.currUname.subscribe(uName=>{
          this.userName=uName;
    })
    return this.userName;
  }
}




// this.hotelNam.currUname.subscribe(uName=>{
//   this.userName=uName;
// });
