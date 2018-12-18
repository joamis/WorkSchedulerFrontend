import {Component, Input, OnInit} from '@angular/core';
import {Subject} from '../../models/Subject';

@Component({
  selector: 'app-single-subject',
  templateUrl: './single-subject.component.html',
  styleUrls: ['./single-subject.component.css']
})
export class SingleSubjectComponent implements OnInit {

  constructor() { }

  @Input() subject: Subject = new Subject();

  ngOnInit() {
  }

}
