import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Event } from '../models/event';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AuthenticationService } from '../../user/authentication.service';

@Injectable()
export class CalenderService {
    private readonly _appUrl = '/API/events';

    constructor(private http: Http, private auth: AuthenticationService) {}

    get events(): Observable<Event[]> {
        return this.http.get(this._appUrl, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) }).map(response =>
            response.json().map(item => {
                return new Event(item.sportName, item.date, item.uur, item.user);
            })
        );
    }

    addEvent(event: Event) {
        return this.http.post(this._appUrl, event, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
            .map(res => res.json())
            .map(item => {
                return new Event(item.sportName, item.date, item.uur, item.user);
            }).subscribe();
    }
}
