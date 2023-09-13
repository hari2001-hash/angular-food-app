import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCountdownComponent } from './discount-countdown.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DiscountCountdownComponent', () => {
  let component: DiscountCountdownComponent;
  let fixture: ComponentFixture<DiscountCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountCountdownComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
