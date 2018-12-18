import { Component, OnInit } from '@angular/core';
import {Student} from '../../models/Student';
import {SingleStudentService} from '../../services/single-student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [];

  constructor(private singleStudentService: SingleStudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.singleStudentService.getStudents() .subscribe(students => this.students = students);;
  }


}
