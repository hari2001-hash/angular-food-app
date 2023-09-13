import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
@Injectable({
  providedIn:'root'
})
// export class Payment implements CanActivate{
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | Promise<any> {
//     console.log("can Activate ...");

//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve(true),5000
//       });
//     })
//   }

// }
export class Payment implements CanActivate{
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | Promise<any> {
    console.log("can Activate ...");

    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(true),5000
      });
    })
  }

  constructor() { }

}
