import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addUser(username: HTMLInputElement, userpasswd: HTMLInputElement): boolean {
    console.log(username.value + ' ' + userpasswd.value);
    return false;
  }
}
