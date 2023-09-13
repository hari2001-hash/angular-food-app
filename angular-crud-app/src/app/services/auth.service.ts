import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean=false;
  adminLoggedIn:boolean=false;

  login(){
    this.loggedIn=true;
  }
  logout(){
    this.loggedIn=false;
  }
  adminLogin(){
    this.adminLoggedIn=true;
  }
  adminLogout(){
    this.adminLoggedIn=false;
  }

  isAuthenticated(){
    return this.loggedIn;
  }
  adminAuthenticated(){
    return this.adminLoggedIn;
  }

  constructor() { }
}
