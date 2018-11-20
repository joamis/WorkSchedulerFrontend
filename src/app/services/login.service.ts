import {Injectable} from '@angular/core';
import {userUrl} from '../api';
import {User} from '../models/User';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private router: Router) {
    this.isUserLoggedIn = false;
  }

  private isUserLoggedIn;

  loginUser(user: User): void {
    this.http.post<any>(userUrl,  JSON.stringify(user))
      .subscribe((res) => {
          console.log('User logged in');
          console.log(res);
          const token = res.token;
          const userFromDb = res.student;
          console.log(userFromDb.username)
          const username = userFromDb.username;
          localStorage.setItem('authKey', token);
          localStorage.setItem('username', username);
          console.log('userFromDb');
          console.log(userFromDb);
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
