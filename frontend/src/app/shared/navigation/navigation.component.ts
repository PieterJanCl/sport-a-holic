import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../user/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SportDataService } from '../../core/services/sport-data.service';

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
    this.router.navigate(['/home']);
  }

  get sports() {
    return this._sports;
  }

  ngOnInit() {
    this._sports = this.sportDataService.sports;
  }

}
