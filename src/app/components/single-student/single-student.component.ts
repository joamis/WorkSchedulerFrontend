import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../models/Student';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.css']
})
export class SingleStudentComponent implements OnInit {

  constructor() { }

  @Input() student: Student = new Student();
  ngOnInit() {
  }

}
