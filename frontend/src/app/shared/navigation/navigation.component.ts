import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../user/authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  private loginText: string;

  constructor(private authService: AuthenticationService,private router: Router) {
    if (this.authService.user$.value !== null) {
      this.loginText = 'Welcome, ' + this.authService.user$.value;
    } else if (this.authService.user$.value === null) {
    this.loginText = '';
    }
  }

  get currentUser(): Observable<string> {
    return this.authService.user$;
  }

  get getloginText(){
    return this.loginText;
  }

  setloginText(input: string) {
    window.location.reload();
    this.loginText = input;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['post/list']);
    this.loginText = 'You have been logged out';
  }

  ngOnInit() {
  }

}
