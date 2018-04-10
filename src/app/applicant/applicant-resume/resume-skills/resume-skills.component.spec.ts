import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSkillsComponent } from './resume-skills.component';

describe('ResumeSkillsComponent', () => {
  let component: ResumeSkillsComponent;
  let fixture: ComponentFixture<ResumeSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
