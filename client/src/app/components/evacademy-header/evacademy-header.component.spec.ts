import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvacademyHeaderComponent } from './evacademy-header.component';

describe('EvacademyHeaderComponent', () => {
  let component: EvacademyHeaderComponent;
  let fixture: ComponentFixture<EvacademyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvacademyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvacademyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
