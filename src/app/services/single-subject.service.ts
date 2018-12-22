import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {subjectsUrl} from '../api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from '../models/Subject';


@Injectable({
  providedIn: 'root'
})
export class SingleSubjectService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(subjectsUrl);
  }

  addSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(subjectsUrl, JSON.stringify(subject));
  }

  deleteSubject(subject: Subject) {
    const url: string = subjectsUrl + '/' + subject._id;
    this.http.delete<Subject>(url).subscribe( () => {console.log('deleted')})
  }

  updateSubject(subject: Subject) {
    const url: string = subjectsUrl + '/' + subject._id;
    console.log(subject)
    return this.http.put<Subject>(url, subject);
  }
}
