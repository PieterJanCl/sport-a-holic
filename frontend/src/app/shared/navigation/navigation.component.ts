import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../user/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SportDataService } from '../../core/services/sportDataService';
import { Sport } from '../../core/models/sport';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  private _sports;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private sportDataService: SportDataService
  ) {}

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }

  setloginText(input: string) {
    window.location.reload();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['post/list']);
  }

  get sports() {
    return this._sports;
  }

  addSport() {
    this.sportDataService.addNewSport(new Sport('fietsen')).subscribe();
  }

  ngOnInit() {
    this._sports = this.sportDataService.sports;
  }

}
