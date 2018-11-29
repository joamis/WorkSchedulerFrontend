import {Injectable} from '@angular/core';
import {userUrl} from '../api';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {LoggedStudentService} from './logged-student.service';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private loggedStudentService: LoggedStudentService) {
    this.isUserLoggedIn = false;
  }

  private isUserLoggedIn;

  loginUser(user: User, invokeOnSuccess: Function): void {
    this.http.post<any>(userUrl,  JSON.stringify(user))
      .subscribe((res) => {
          console.log('User logged in');
          console.log(res);
          const token = res.token;
          const userFromDb = res.student;
          this.loggedStudentService.saveData(token, userFromDb);
          console.log(this.loggedStudentService.getAuthKey())
          console.log(this.loggedStudentService.getStudent())
          invokeOnSuccess();
        },
        () => {
          alert('Wrong login and/or password');
        });
  }

  logOut() {
    localStorage.removeItem('authKey');
    localStorage.removeItem('username');
  }

  getAuthKey(): string {
    return localStorage.getItem('authKey');
  }

  getUserName(): string {
    return localStorage.getItem('username');
  }

  isLoggedIn() {
    return localStorage.getItem('authKey') !== null;
  }


}
