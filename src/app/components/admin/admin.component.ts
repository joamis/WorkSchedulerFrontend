import { Component, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CalculateScheduleComponent} from '../calculate-schedule/calculate-schedule.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  constructor(private modalService: NgbModal) { }
  calculateView = 'CALCULATE';
  adminView = 'ADMIN';
  usersView = 'USERS';
  studentsView = 'STUDENTS';
  currentView = this.adminView;
  ngOnInit() {
  }

  open() {
    this.modalService.open(CalculateScheduleComponent);
  }

  goToAdminView () {
    this.currentView = this.adminView;
  }

  goToUsersView () {
    console.log('1234566778')
    this.currentView = this.usersView;
  }

  goToStudentsView(){
    this.currentView = this.studentsView;
  }
}
