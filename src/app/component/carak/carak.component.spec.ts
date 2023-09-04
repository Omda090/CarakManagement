import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarakComponent } from './carak.component';

describe('CarakComponent', () => {
  let component: CarakComponent;
  let fixture: ComponentFixture<CarakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
