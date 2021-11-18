import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvAcademyWeatherComponent } from './ev-academy-weather.component';

describe('EvAcademyWeatherComponent', () => {
  let component: EvAcademyWeatherComponent;
  let fixture: ComponentFixture<EvAcademyWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvAcademyWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvAcademyWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
