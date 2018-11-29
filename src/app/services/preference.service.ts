import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {preferenceUrl} from '../api';
import {Preference} from '../models/Preference';
import {Student} from '../models/Student';
import {LoggedStudentService} from './logged-student.service';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  constructor(private http: HttpClient, private loggedStudentService: LoggedStudentService) {
  }

  getPreferences(student: Student): Observable<Preference[]> {
    return this.http.get<Preference[]>(preferenceUrl + '/' + student._id);
  }

  postPreferences(preferences: Array<Preference>, onSuccess: Function): void {
    console.log('postPreferences');
    console.log(preferences);
    this.http.post<Student>(preferenceUrl + '/' + this.loggedStudentService.getStudent()._id, JSON.stringify(preferences)).subscribe((student) => {
      console.log(student)
      this.loggedStudentService.updateStudent(student);
      onSuccess();
    });
  }
}
