import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingPageRequestBookingComponent } from './camping-page-request-booking.component';

describe('CampingPageRequestBookingComponent', () => {
  let component: CampingPageRequestBookingComponent;
  let fixture: ComponentFixture<CampingPageRequestBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampingPageRequestBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampingPageRequestBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
