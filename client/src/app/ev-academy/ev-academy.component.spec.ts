import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvAcademyComponent } from './ev-academy.component';

describe('EvAcademyComponent', () => {
  let component: EvAcademyComponent;
  let fixture: ComponentFixture<EvAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
