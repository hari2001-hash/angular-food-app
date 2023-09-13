import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBrandsComponent } from './top-brands.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('TopBrandsComponent', () => {
  let component: TopBrandsComponent;
  let fixture: ComponentFixture<TopBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBrandsComponent ],
      imports:[RouterTestingModule,HttpClientTestingModule, ReactiveFormsModule ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
