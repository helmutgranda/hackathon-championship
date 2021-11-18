import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCourseResultComponent } from './learning-course-result.component';

describe('LearningCourseResultComponent', () => {
  let component: LearningCourseResultComponent;
  let fixture: ComponentFixture<LearningCourseResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCourseResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCourseResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
