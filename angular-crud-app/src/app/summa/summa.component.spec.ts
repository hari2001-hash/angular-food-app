import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaComponent } from './summa.component';

describe('SummaComponent', () => {
  let component: SummaComponent;
  let fixture: ComponentFixture<SummaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
