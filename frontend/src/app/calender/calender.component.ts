import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalenderService } from '../core/services/event.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Event } from '../core/models/event';
import { AuthenticationService } from '../user/authentication.service';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalenderComponent implements OnInit {

    public event: FormGroup;
    public creating = false;
    public currentUser;
    private _events;

    constructor(
        private fb: FormBuilder,
        private calenderService: CalenderService,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    openCreating() {
        this.creating = !this.creating;
    }

    ngOnInit() {
        this._events = this.calenderService.events;
        this.event = this.fb.group({
            sportName: ['', Validators.required],
            date: ['', Validators.required],
            uur: ['', Validators.required]
        });

        this.getUser();
    }

    getUser() {
        this.authenticationService.user$.asObservable().map(user => user).subscribe(val => this.currentUser = val);
        return this.currentUser;
    }

    onSubmit() {
        const date = moment(this.event.value.date).format('DD MMM YYYY');
        this.calenderService.addEvent(new Event(this.event.value.sportName, date, this.event.value.uur, this.currentUser));
        this.creating = true;
        this.router.navigateByUrl('/lopen', {skipLocationChange: true}).then(() => this.router.navigate(['/event']));

    }

    get events() {
        return this._events;
    }

}
