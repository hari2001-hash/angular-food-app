import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate{
  canDeactivate:()=> Observable<boolean>|Promise<boolean>|boolean;
}
@Injectable({
  providedIn: 'root'
})
export class CartItemRemoveService implements CanDeactivate<CanComponentDeactivate>{

  constructor() { }
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return component && component.canDeactivate ? component.canDeactivate() :true;
  }
}
