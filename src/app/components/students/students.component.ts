import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../models/Student';
import {SingleStudentService} from '../../services/single-student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  @Output() backButtonPressed = new EventEmitter();
  students: Student[] = [];

  constructor(private singleStudentService: SingleStudentService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.singleStudentService.getStudents() .subscribe(students => this.students = students);;
  }

  goBack(){
    this.backButtonPressed.emit();
  }
}
