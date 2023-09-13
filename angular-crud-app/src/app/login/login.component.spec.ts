import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoggerService } from '../services/loggers/logger.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService:AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule,
     ],providers:[LoggerService]

    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate to event page after successful login', () => {
    const navigateSpy = {navigate:jasmine.createSpy('navigate')}


    // Simulate a successful login
    component.fetchData();




    // Expect that the AuthService's login method was called

      expect(authService.login).toHaveBeenCalled();


     // Expect that the router's navigateByUrl method was called with the event page URL
      // expect(naviga
});
})
