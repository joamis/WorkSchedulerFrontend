import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {subjectsUrl} from '../api';
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

  deleteSubject(subject: Subject) {
    console.log(subject)
    const url: string = subjectsUrl + '/' + subject._id;
    console.log(url)
    this.http.delete<Subject>(url).subscribe( () => {console.log('deleted')})
  }
}
