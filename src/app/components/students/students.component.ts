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
  additionView = 'ADDITION';
  studentsView = 'STUDENTS';
  currentView = this.studentsView;
  student: Student;
  students: Student[] = [];

  constructor(private singleStudentService: SingleStudentService) { }


  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.singleStudentService.getStudents() .subscribe(students => this.students = students);;
  }

  goToStudentsView(): void {
    this.currentView = this.studentsView;
  }

  goToStudentAdditionView() {
    this.currentView = this.additionView;
  }

  goToStudentsViewAndReload() {
    this.singleStudentService.getStudents().subscribe(students => {
        this.students = students;
        this.goToStudentsView();
      }
    );
  }
  goBack(){
    this.backButtonPressed.emit();
  }
}
