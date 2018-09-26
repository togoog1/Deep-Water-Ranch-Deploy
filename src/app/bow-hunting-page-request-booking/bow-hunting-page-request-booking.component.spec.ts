import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowHuntingPageRequestBookingComponent } from './bow-hunting-page-request-booking.component';

describe('BowHuntingPageRequestBookingComponent', () => {
  let component: BowHuntingPageRequestBookingComponent;
  let fixture: ComponentFixture<BowHuntingPageRequestBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowHuntingPageRequestBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowHuntingPageRequestBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
