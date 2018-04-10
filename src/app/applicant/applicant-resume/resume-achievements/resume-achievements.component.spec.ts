import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAchievementsComponent } from './resume-achievements.component';

describe('ResumeAchievementsComponent', () => {
  let component: ResumeAchievementsComponent;
  let fixture: ComponentFixture<ResumeAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
