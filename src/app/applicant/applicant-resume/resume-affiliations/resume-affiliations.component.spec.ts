import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAffiliationsComponent } from './resume-affiliations.component';

describe('ResumeAffiliationsComponent', () => {
  let component: ResumeAffiliationsComponent;
  let fixture: ComponentFixture<ResumeAffiliationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeAffiliationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAffiliationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
