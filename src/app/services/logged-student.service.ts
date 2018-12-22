import {Injectable} from '@angular/core';
import {Student} from '../models/Student';

@Injectable({
  providedIn: 'root'
})
export class LoggedStudentService {

  private AUTH_KEY_ID = 'authKey';
  private STUDENT_ID = 'student';

  constructor() {
  }

  saveData(token, userFromDb) {
    this.deleteSession();
    localStorage.setItem(this.AUTH_KEY_ID, token);
    if (userFromDb) { // isNotAdmin
      localStorage.setItem(this.STUDENT_ID, JSON.stringify(userFromDb));
    }
  }

  deleteSession() {
    localStorage.removeItem(this.AUTH_KEY_ID);
    localStorage.removeItem(this.STUDENT_ID);
  }

  getAuthKey(): string {
    return localStorage.getItem(this.AUTH_KEY_ID);
  }

  updateStudent(student: Student) {
    localStorage.setItem(this.STUDENT_ID, JSON.stringify(student));
  }

  isAdmin(): boolean {
    if (localStorage.hasOwnProperty(this.AUTH_KEY_ID)) {
      return !localStorage.hasOwnProperty(this.STUDENT_ID);
    }
    return false;
  }

  getStudent(): Student {
    return JSON.parse(localStorage.getItem(this.STUDENT_ID));
  }
}
