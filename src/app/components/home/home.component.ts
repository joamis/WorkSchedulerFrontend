import {Component, OnInit} from '@angular/core';
import {LoggedStudentService} from '../../services/logged-student.service';
import {Student, SubjectId} from '../../models/Student';
import {LoginService} from '../../services/login.service';
import {Admin} from '../../models/Admin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeView = 'HOME';
  title = 'WorkScheduler';
  currentView = 'HOME';
  preferencesView = 'PREFERENCES';
  timetableView = 'TIMETABLE';
  registrationView = 'REGISTER';
  loginView = 'LOGIN';
  adminView = 'ADMIN';
  private loggedStudent: Student = null;

  constructor(private loggedStudentService: LoggedStudentService, private loginService: LoginService) {
  }

  ngOnInit() {
    this.loadLoggedInStudent();
    if (this.isAdminLoggedIn()) {
      this.goToAdminView();
    } else if (this.isUserLoggedIn()) {
      this. goTononAdminUserDefaultView();
    }
  }

  isAdminLoggedIn(): boolean {
    return this.loggedStudentService.isAdmin();
  }

  loadLoggedInStudent() {
    this.loggedStudent = this.loggedStudentService.getStudent();
  }

  isScheduleAlreadyCalculated() {
    return this.loggedStudent && this.loggedStudent.subjectsIds.length > 0;
  }

  getStudentWorkSchedule(): Array<SubjectId> {
    if (!this.loggedStudent) {
      return [];
    } else {
      return this.loggedStudent.subjectsIds;
    }
  }

  goToPreferencesView() {
    this.currentView = this.preferencesView;
  }

  goToTimetableView() {
    this.currentView = this.timetableView;
  }

  goToRegistrationView() {
    this.currentView = this.registrationView;
  }

  goHome($event: string) {
    this.currentView = this.homeView;
  }

  goToLoginView() {
    this.currentView = this.loginView;
  }

  goToAdminView() {
    this.currentView = this.adminView;
  }

  goTononAdminUserDefaultView(): void {
    if (this.isScheduleAlreadyCalculated()) {
      this.goToTimetableView();
    } else {
      this.goToPreferencesView();
    }
  }

  userLoggedIn() {
    this.loadLoggedInStudent();
    this.goTononAdminUserDefaultView();
  }

  isUserLoggedIn() {
    return this.loginService.isLoggedIn();
  }

  logOut() {
    this.loggedStudentService.deleteSession();
    this.loggedStudent = null;
    this.currentView = this.homeView;
    console.log(this.currentView);
  }

  goBackToAdmin() {
    this.currentView = this.adminView;
  }
}
