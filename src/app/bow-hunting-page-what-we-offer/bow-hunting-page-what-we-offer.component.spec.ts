import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowHuntingPageWhatWeOfferComponent } from './bow-hunting-page-what-we-offer.component';

describe('BowHuntingPageWhatWeOfferComponent', () => {
  let component: BowHuntingPageWhatWeOfferComponent;
  let fixture: ComponentFixture<BowHuntingPageWhatWeOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowHuntingPageWhatWeOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowHuntingPageWhatWeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
