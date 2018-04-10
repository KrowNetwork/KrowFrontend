import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantResumeComponent } from './applicant-resume.component';

describe('ApplicantResumeComponent', () => {
  let component: ApplicantResumeComponent;
  let fixture: ComponentFixture<ApplicantResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
