import {Component, Input, OnInit} from '@angular/core';
import {Counter} from '../timetable/timetable.component';
import {SubjectId} from '../../models/Student';

@Component({
  selector: 'app-assigned-work-schedule',
  templateUrl: './assigned-work-schedule.component.html',
  styleUrls: ['./assigned-work-schedule.component.css']
})
export class AssignedWorkScheduleComponent implements OnInit {

  constructor() { }

  @Input() subjectsIds: Array<SubjectId> = [];

  ngOnInit() {
  }
}
