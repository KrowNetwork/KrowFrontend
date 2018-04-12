import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedJobsComponent } from './requested-jobs.component';

describe('RequestedJobsComponent', () => {
  let component: RequestedJobsComponent;
  let fixture: ComponentFixture<RequestedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
