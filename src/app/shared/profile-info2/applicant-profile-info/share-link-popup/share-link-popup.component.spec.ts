import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareLinkPopupComponent } from './share-link-popup.component';

describe('ShareLinkPopupComponent', () => {
  let component: ShareLinkPopupComponent;
  let fixture: ComponentFixture<ShareLinkPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareLinkPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareLinkPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});