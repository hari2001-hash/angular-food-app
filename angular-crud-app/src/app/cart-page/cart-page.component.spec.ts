import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageComponent } from './cart-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { AuthService } from '../service/Payment/auth.service';
import { HotelNameServService } from '../hotel-name.service';
import { RazorpayService } from '../services/paymentIntegration/razorpay.service';
import { EmployeeService } from '../services/employee.service';
import { of } from 'rxjs';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPageComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule ],
      schemas: [NO_ERRORS_SCHEMA],
      providers:[CartService,AuthService,HotelNameServService,RazorpayService,EmployeeService]

    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get all carts from setCart', ()=>{
  //   const service=fixture.debugElement.injector.get(CartService);
  //   spyOn(service, 'getCart').and.returnValue(of({}));
  //   component.setCart();
  //   expect(component.setCart).toEqual({});
  // })
});
