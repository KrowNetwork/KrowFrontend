import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyJobComponent } from './verify-job.component';

describe('VerifyJobComponent', () => {
  let component: VerifyJobComponent;
  let fixture: ComponentFixture<VerifyJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
