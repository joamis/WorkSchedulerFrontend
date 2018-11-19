import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'WorkScheduler';
  currentView = 'HOME';
  timetableView = 'TIMETABLE';
  registrationView = 'REGISTER';
  constructor() { }
  ngOnInit() {
  }

  goToTimetableView() {
    this.currentView = this.timetableView;
  }

  goToRegistrationView() {
    this.currentView = this.registrationView;
  }
}
