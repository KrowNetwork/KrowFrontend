import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostJobComponent } from './admin-post-job.component';

describe('AdminPostJobComponent', () => {
  let component: AdminPostJobComponent;
  let fixture: ComponentFixture<AdminPostJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
