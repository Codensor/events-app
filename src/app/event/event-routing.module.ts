import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventBookingComponent } from './event-booking/event-booking.component';

const routes: Routes = [
  {path: 'eventListing', component: EventListingComponent },
  {path: 'eventBooking/:name/:seats', component: EventBookingComponent },
  { path: '**', redirectTo: '/eventListing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
