import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedDialogComponent } from './booked-dialog.component';

describe('BookedDialogComponent', () => {
  let component: BookedDialogComponent;
  let fixture: ComponentFixture<BookedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
