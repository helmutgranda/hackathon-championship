import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningExperienceOneComponent } from './learning-experience-one.component';

describe('LearningExperienceOneComponent', () => {
  let component: LearningExperienceOneComponent;
  let fixture: ComponentFixture<LearningExperienceOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningExperienceOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningExperienceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
