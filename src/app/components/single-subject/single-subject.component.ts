import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() updateSubjectEvent = new EventEmitter<Subject>();
  @Output() subjectDeleted = new EventEmitter();

  ngOnInit() {
  }

  deleteSubject() {
    this.subjectService.deleteSubject(this.subject)
    this.subjectDeleted.emit();
  }

  updateSubject() {
    this.updateSubjectEvent.emit(this.subject);
  }
}
