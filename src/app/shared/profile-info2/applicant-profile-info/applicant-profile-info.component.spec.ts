import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantProfileInfoPrivateComponent } from './applicant-profile-info-private.component';

describe('ApplicantProfileInfoPrivateComponent', () => {
  let component: ApplicantProfileInfoPrivateComponent;
  let fixture: ComponentFixture<ApplicantProfileInfoPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicantProfileInfoPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicantProfileInfoPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
