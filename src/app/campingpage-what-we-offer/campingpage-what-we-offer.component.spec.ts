import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampingpageWhatWeOfferComponent } from './campingpage-what-we-offer.component';

describe('CampingpageWhatWeOfferComponent', () => {
  let component: CampingpageWhatWeOfferComponent;
  let fixture: ComponentFixture<CampingpageWhatWeOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampingpageWhatWeOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampingpageWhatWeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
