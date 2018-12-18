import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {usersUrl} from '../api';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class SingleUserService {

  constructor( private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    console.log('hjkl')
    return this.http.get<User[]>(usersUrl);
  }
}
