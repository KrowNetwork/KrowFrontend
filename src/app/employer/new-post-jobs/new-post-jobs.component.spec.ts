import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostJobsComponent } from './new-post-jobs.component';

describe('NewPostJobsComponent', () => {
  let component: NewPostJobsComponent;
  let fixture: ComponentFixture<NewPostJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPostJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
