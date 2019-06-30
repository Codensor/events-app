import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-booked-dialog',
  templateUrl: './booked-dialog.component.html',
  styleUrls: ['./booked-dialog.component.scss']
})
export class BookedDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BookedDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
