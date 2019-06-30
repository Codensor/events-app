import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  fetchEvents(): Promise<any> {
    return this.http.get('http://localhost:4200/assets/events-data/events.json').toPromise().then((res: Response) => {
      return res;
    });
  }
}
