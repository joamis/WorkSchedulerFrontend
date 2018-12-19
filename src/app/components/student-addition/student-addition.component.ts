import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Student} from '../../models/Student';
import {SingleStudentService} from '../../services/single-student.service';

@Component({
  selector: 'app-student-addition',
  templateUrl: './student-addition.component.html',
  styleUrls: ['./student-addition.component.css']
})
export class StudentAdditionComponent implements OnInit {

  student = new Student();
  @Output() backButtonPressed = new EventEmitter();
  @Output() studentAdded = new EventEmitter();

  constructor(private studentService: SingleStudentService) {
  }

  ngOnInit() {
  }
  goBack(){
    this.backButtonPressed.emit();
  }

  addStudent(){
    this.studentService.addStudent(this.student).subscribe((result) => {
      this.studentAdded.emit();
    });
  }
}
