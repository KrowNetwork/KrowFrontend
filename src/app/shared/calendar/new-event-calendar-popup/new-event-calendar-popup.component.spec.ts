import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventCalendarPopupComponent } from './new-event-calendar-popup.component';

describe('NewEventCalendarPopupComponent', () => {
  let component: NewEventCalendarPopupComponent;
  let fixture: ComponentFixture<NewEventCalendarPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEventCalendarPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEventCalendarPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
