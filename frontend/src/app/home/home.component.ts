import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { SportDataService } from '../core/services/sportDataService';
import { Sport } from '../core/models/sport';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private _sports;

  constructor(
    private sportDataService: SportDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this._sports = this.sportDataService.sports;
  }

  get sports() {
    return this._sports;
  }

  addNewSport(sportName: string) {
    this.sportDataService.addNewSport(new Sport(sportName, true));
    this.router.navigateByUrl('/lopen', {skipLocationChange: true}).then(() =>
      this.router.navigate(['']));
  }
}
