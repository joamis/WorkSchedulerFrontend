import {Component, Input, OnInit} from '@angular/core';
import {ReadytimetableService} from '../../services/readytimetable.service';
import {GroupClass} from '../../models/GroupClass';
import {SubjectId} from '../../models/Student';

@Component({
  selector: 'app-ready-timetable',
  templateUrl: './ready-timetable.component.html',
  styleUrls: ['./ready-timetable.component.css']
})
export class ReadyTimetableComponent implements OnInit {

  constructor() { }

  @Input() subject: SubjectId;
  ngOnInit() {
  }

}
