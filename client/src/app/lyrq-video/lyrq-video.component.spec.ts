import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyrqVideoComponent } from './lyrq-video.component';

describe('LyrqVideoComponent', () => {
  let component: LyrqVideoComponent;
  let fixture: ComponentFixture<LyrqVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyrqVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyrqVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
