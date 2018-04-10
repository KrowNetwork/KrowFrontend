import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerPostJobsComponent } from './employer-post-jobs.component';

describe('EmployerPostJobsComponent', () => {
  let component: EmployerPostJobsComponent;
  let fixture: ComponentFixture<EmployerPostJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerPostJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerPostJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
