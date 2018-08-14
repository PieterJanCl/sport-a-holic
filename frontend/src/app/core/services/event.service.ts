import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Event } from '../models/event';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CalenderService {
    private readonly _appUrl = 'http://localhost:4200/API/events';

    constructor(private http: Http) {}

    get events(): Observable<Event[]> {
        return this.http.get(this._appUrl).map(response =>
            response.json().map(item => {
                return new Event(item.sportName, item.date, item.uur, item.user);
            })
        );
    }

    addEvent(event: Event) {
        return this.http.post(this._appUrl, event)
            .map(res => res.json())
            .map(item => {
                return new Event(item.sportName, item.date, item.uur, item.user);
            }).subscribe();
    }
}
