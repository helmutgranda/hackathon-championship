import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCourseBadgeComponent } from './learning-course-badge.component';

describe('LearningCourseBadgeComponent', () => {
  let component: LearningCourseBadgeComponent;
  let fixture: ComponentFixture<LearningCourseBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningCourseBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCourseBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
