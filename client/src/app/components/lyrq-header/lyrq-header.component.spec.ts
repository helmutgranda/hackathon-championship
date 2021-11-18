import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyrqHeaderComponent } from './lyrq-header.component';

describe('LyrqHeaderComponent', () => {
  let component: LyrqHeaderComponent;
  let fixture: ComponentFixture<LyrqHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LyrqHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LyrqHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
