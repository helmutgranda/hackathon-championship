import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvAcademyChargingComponent } from './ev-academy-charging.component';

describe('EvAcademyChargingComponent', () => {
  let component: EvAcademyChargingComponent;
  let fixture: ComponentFixture<EvAcademyChargingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvAcademyChargingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvAcademyChargingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
