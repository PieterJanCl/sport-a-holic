import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Sport } from '../models/sport';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SportDataService {
    private readonly _appUrl = 'http://localhost:4200/API/sports';

    constructor(private http: Http) {}

    get sports(): Observable<Sport[]> {
        return this.http.get(this._appUrl).map(response =>
            response.json().map(item => {
                return new Sport(item.name, item.newSport);
            })
        );
    }

    get newSports(): Observable<Sport[]> {
        return this.http.get(this._appUrl).map(response =>
            response.json().map(item => {
                if (item.newSport) {
                    return new Sport(item.name, item.newSport);
                }
            })
        );
    }

    addNewSport(sport: Sport) {
        return this.http.post(this._appUrl, sport)
            .map(res => res.json())
            .map(item => {
                return new Sport(item.name, item.newSport);
            }).subscribe();
    }
}
