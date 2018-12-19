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

  addStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(studentsUrl, JSON.stringify(student));
  }

  deleteStudent(student: Student) {
    const url: string = studentsUrl + '/' + student._id;
    this.http.delete<Student>(url).subscribe( () => {console.log('deleted')});
  }
}
