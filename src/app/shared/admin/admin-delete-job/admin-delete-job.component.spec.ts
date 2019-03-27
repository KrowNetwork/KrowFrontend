import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteJobComponent } from './admin-delete-job.component';

describe('AdminDeleteJobComponent', () => {
  let component: AdminDeleteJobComponent;
  let fixture: ComponentFixture<AdminDeleteJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeleteJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
