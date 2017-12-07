import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginUser(username: HTMLInputElement, userpasswd: HTMLInputElement): boolean {
    console.log(username.value + ' ' + userpasswd.value);
    return false;
  }
}
