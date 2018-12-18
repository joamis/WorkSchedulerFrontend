import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../models/Student';
import {HttpClient} from '@angular/common/http';
import {studentsUrl} from '../api';


@Injectable({
  providedIn: 'root'
})
export class SingleStudentService {

  constructor(private http: HttpClient) { }


  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(studentsUrl);
  }
}
