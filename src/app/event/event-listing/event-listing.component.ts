import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-listing',
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})
export class EventListingComponent implements OnInit {


  public events: Event[] = [];
  public filteredEvents: Event[] = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.fetchEvents().then(res => {
      if (res && res.length > 0) {
        res.forEach((event: Event) => {
          this.events.push(new Event(event));
          this.filteredEvents.push(new Event(event));
        });
      }
    });
  }

  filterEvents(eventData) {
    const searchText = eventData.target.value;
    this.filteredEvents = [];
    this.events.forEach(event => {
      if (event.name.startsWith(searchText.charAt(0).toUpperCase() + searchText.slice(1))) {
        this.filteredEvents.push(event);
      }
    });
  }
}
