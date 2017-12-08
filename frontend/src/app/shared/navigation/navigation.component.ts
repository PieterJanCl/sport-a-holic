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


  constructor(private authService: AuthenticationService, private router: Router) {
  }

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

  ngOnInit() {
  }

}
