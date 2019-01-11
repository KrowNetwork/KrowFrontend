import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingPopupComponent } from './messaging-popup.component';

describe('MessagingPopupComponent', () => {
  let component: MessagingPopupComponent;
  let fixture: ComponentFixture<MessagingPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagingPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
