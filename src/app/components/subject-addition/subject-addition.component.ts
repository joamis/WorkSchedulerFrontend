import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SingleSubjectService} from '../../services/single-subject.service';
import {Subject} from '../../models/Subject';
import {Group, GroupClass} from '../../models/GroupClass';

@Component({
  selector: 'app-subject-addition',
  templateUrl: './subject-addition.component.html',
  styleUrls: ['./subject-addition.component.css']
})
export class SubjectAdditionComponent implements OnInit {

  subject = new Subject();
  @Output() backButtonPressed = new EventEmitter();
  @Output() subjectAdded = new EventEmitter();

  constructor(private subjectService: SingleSubjectService) {
  }

  ngOnInit() {
  }

  addGroup() {
    this.subject.groups.push(new Group());
  }

  deleteGroup(index: number) {
    this.subject.groups.splice( index, 1 );
    console.log(this.subject.groups)
  }

  goBack(){
    this.backButtonPressed.emit();
  }

  addSubject(){
    this.subjectService.addSubject(this.subject).subscribe((result) => {
      this.subjectAdded.emit();
    });
  }
}
