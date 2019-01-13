import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerProfileInfoComponent } from './employer-profile-info.component';

describe('EmployerProfileInfoComponent', () => {
  let component: EmployerProfileInfoComponent;
  let fixture: ComponentFixture<EmployerProfileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerProfileInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerProfileInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
