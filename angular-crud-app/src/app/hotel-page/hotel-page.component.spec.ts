import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPageComponent } from './hotel-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('HotelPageComponent', () => {
  let component: HotelPageComponent;
  let fixture: ComponentFixture<HotelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelPageComponent ],
      imports:[HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],


    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
