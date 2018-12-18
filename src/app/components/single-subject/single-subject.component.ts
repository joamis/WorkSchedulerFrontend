import {Component, Input, OnInit} from '@angular/core';
import {Subject} from '../../models/Subject';
import {SingleSubjectService} from '../../services/single-subject.service';

@Component({
  selector: 'app-single-subject',
  templateUrl: './single-subject.component.html',
  styleUrls: ['./single-subject.component.css']
})
export class SingleSubjectComponent implements OnInit {

  constructor(private subjectService: SingleSubjectService) { }

  @Input() subject: Subject = new Subject();

  ngOnInit() {
  }

  deleteSubject() {
    this.subjectService.deleteSubject(this.subject)
  }
}
