import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {preferenceUrl, subjectsUrl} from '../api';
import {HttpClient} from '@angular/common/http';
import {Subject} from '../models/Subject';


@Injectable({
  providedIn: 'root'
})
export class SingleSubjectService {

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(subjectsUrl);
  }

  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(subjectsUrl, JSON.stringify(subject));
  }
}
