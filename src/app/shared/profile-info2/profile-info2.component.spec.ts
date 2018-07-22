import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfo2Component } from './profile-info2.component';

describe('ProfileInfo2Component', () => {
  let component: ProfileInfo2Component;
  let fixture: ComponentFixture<ProfileInfo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
