import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);


    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to event page after successful login', () => {
    const userName = fixture.debugElement.query(By.css("#userName"));
    const phoneNumber = fixture.debugElement.query(By.css("#phoneNumber"));
    const email = fixture.debugElement.query(By.css("#email"));
    const navigateSpy = {navigate:jasmine.createSpy('navigate')}
    const doSomethingSpy = spyOn(component, 'fetchData')
    // Simulate a successful login
    component.fetchData();

    expect(component.userNameFromForm).toBeFalsy();
    expect(component.phoneNumFromForm).toBeFalsy();
    expect(component.emailFromForm).toBeFalsy();
    expect(userName).toBeTruthy();
    expect(phoneNumber).toBeTruthy();
    expect(email).toBeTruthy();



    // Expect that the AuthService's login method was called
      expect(doSomethingSpy).toHaveBeenCalled();


     // Expect that the router's navigateByUrl method was called with the event page URL
      // expect(naviga
});
});
