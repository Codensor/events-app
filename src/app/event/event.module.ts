import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventBookingComponent } from './event-booking/event-booking.component';

import {
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule,
  MatIconModule
} from '@angular/material';

import { EventService } from './services/event.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookedDialogComponent } from './booked-dialog/booked-dialog.component';


@NgModule({
  declarations: [EventListingComponent, EventBookingComponent, BookedDialogComponent],
  imports: [
    CommonModule,
    EventRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    EventListingComponent,
    EventBookingComponent
  ],
  providers: [EventService],
  entryComponents: [BookedDialogComponent]
})
export class EventModule { }
