import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output() userLogedIn: EventEmitter<void> = new EventEmitter<void>();
  @Output() adminLogedIn: EventEmitter<void> = new EventEmitter<void>();

  user: User = new User();
  loginProfile: String = 'student';

  ngOnInit() {
  }

  postStudent() {
    this.loginService.loginStudent(this.user, () => {
      this.userLogedIn.emit();
    });
  }

  postAdmin() {
    this.loginService.loginAdmin(this.user, () => {
      this.adminLogedIn.emit();
    });
  }

  postCorrectUser() {
    if (this.loginProfile === 'student') {
      this.postStudent();
    } else if (this.loginProfile === 'admin') {
      this.postAdmin();
    }
  }
}
