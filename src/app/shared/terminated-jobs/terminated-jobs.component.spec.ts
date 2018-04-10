import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminatedJobsComponent } from './terminated-jobs.component';

describe('TerminatedJobsComponent', () => {
  let component: TerminatedJobsComponent;
  let fixture: ComponentFixture<TerminatedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminatedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminatedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
