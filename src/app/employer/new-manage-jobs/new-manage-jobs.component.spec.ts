import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewManageJobsComponent } from './new-manage-jobs.component';

describe('NewManageJobsComponent', () => {
  let component: NewManageJobsComponent;
  let fixture: ComponentFixture<NewManageJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewManageJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewManageJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
