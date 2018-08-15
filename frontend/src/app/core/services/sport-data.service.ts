import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Sport } from '../models/sport';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { AuthenticationService } from '../../user/authentication.service';
import {BACKEND_URL} from '../../../environments/environment.prod';

@Injectable()
export class SportDataService {
    private readonly _appUrl = `${BACKEND_URL}/API/sports`;

    constructor(private http: Http, private auth: AuthenticationService) {}

    get sports(): Observable<Sport[]> {
        return this.http.get(this._appUrl).map(response =>
            response.json().map(item => {
                return new Sport(item.name, item.newSport);
            })
        );
    }

    addNewSport(sport: Sport) {
        return this.http.post(this._appUrl, sport, { headers: new Headers({Authorization: `Bearer ${this.auth.token}`}) })
            .map(res => res.json())
            .map(item => {
                return new Sport(item.name, item.newSport);
            }).subscribe();
    }
}
