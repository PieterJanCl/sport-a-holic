import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from './User.model';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDataService {

    private _appUrl = 'http://localhost:4200/API/register/';

    constructor(private http: Http) {
    }

    get users(): Observable<User[]>{
        return this.http.get(this._appUrl).map(response =>
            response.json().map(item =>
              new User(item.username, item.passwd)
            )
          );
    }
}