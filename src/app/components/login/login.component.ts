import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  loginView = 'LOGIN';
  currentView = this.loginView;

  user: User = new User();

  ngOnInit() {
  }

  postUser() {
    this.loginService.loginUser(this.user);
  }
}
