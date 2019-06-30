import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BookedDialogComponent } from '../booked-dialog/booked-dialog.component';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.scss'],
})
export class EventBookingComponent implements OnInit {

  public eventName = '';
  public eventSeats = 0;
  public seatsRequired = [];
  public seatsRequested = [];
  public form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
  });
  private listOfNameControls = ['name'];
  public isCancelDisabled = false;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.eventName = params.name;
      this.eventSeats = params.seats;
    });
    let availableSeats = 6;
    if (this.eventSeats < 6) {
      availableSeats = this.eventSeats;
    }
    for (let i = 1; i <= availableSeats; i++) {
      this.seatsRequired.push(i);
    }
  }

  setSeatRequested(seats) {
    this.listOfNameControls = ['name'];
    if (seats.value === 1) {
      this.seatsRequested = [];
      this.form = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
        email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}')]),
        phone: new FormControl('', [Validators.minLength(10), Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      });
    } else {
      this.seatsRequested = [];
      for (let i = 2; i <= seats.value; i++) {
        this.seatsRequested.push(i);
        this.form.addControl('name' + i, new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]));
        this.listOfNameControls.push('name' + i);
      }
    }
  }

  ErrorCheck(value) {
    const name = 'name' + value;
    const requiredError = this.form.get(name).hasError('required');
    const patternError = this.form.get(name).hasError('pattern');
    if (patternError) {
      return 'pattern';
    } else if (requiredError) {
      return 'required';
    }
  }

  bookEvent() {
    this.isCancelDisabled = true;
    const bookedNames = [];
    this.listOfNameControls.forEach(control => {
      bookedNames.push(this.form.value[control]);
    });
    const submitData = {
      name: this.eventName,
      email: this.form.value.email,
      phone: this.form.value.phone,
      seats: bookedNames.length,
      attendees: bookedNames,
    };
    this.openDialog(submitData);
  }

  openDialog(submitData): void {
    const dialogRef = this.dialog.open(BookedDialogComponent, {
      width: '400px',
      disableClose: true,
      data: {name: submitData.name, seats: submitData.seats, attendees: submitData.attendees}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(submitData);
      this.router.navigate(['/eventListing']);
    });
  }
}
