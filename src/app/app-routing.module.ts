import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CampingpageWhatWeOfferComponent } from './campingpage-what-we-offer/campingpage-what-we-offer.component';
import { CampingPageRequestBookingComponent } from './camping-page-request-booking/camping-page-request-booking.component';
import { BowHuntingPageWhatWeOfferComponent } from './bow-hunting-page-what-we-offer/bow-hunting-page-what-we-offer.component';
import { BowHuntingPageRequestBookingComponent } from './bow-hunting-page-request-booking/bow-hunting-page-request-booking.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CalenderComponent} from './calender/calender.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'AboutUs', component: AboutPageComponent },
  { path: 'Camping', component: CampingpageWhatWeOfferComponent},
  { path: 'CampingRequestBooking', component: CampingPageRequestBookingComponent },
  { path: 'BowHunting', component: BowHuntingPageWhatWeOfferComponent },
  { path: 'BowHuntingRequestBooking', component: BowHuntingPageRequestBookingComponent },
  { path: 'Contact', component: ContactUsComponent },
 { path: 'Calender', component: CalenderComponent },
  { path: "**", component: PageNotFoundComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =
[
    HomePageComponent,
    AboutPageComponent,
    CampingpageWhatWeOfferComponent,
    CampingPageRequestBookingComponent,
    BowHuntingPageWhatWeOfferComponent,
    BowHuntingPageRequestBookingComponent,
    ContactUsComponent,
   CalenderComponent,
    PageNotFoundComponent

]
