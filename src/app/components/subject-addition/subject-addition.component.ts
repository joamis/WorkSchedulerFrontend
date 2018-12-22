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

  @Input() subject;
  @Input() updateOption;
  @Output() backButtonPressed = new EventEmitter();
  @Output() subjectAdded = new EventEmitter();
  time =  {hour: 0, minute: 0};

  constructor(private subjectService: SingleSubjectService) {
  }

  ngOnInit() {
  }

  addGroup() {
    this.subject.groups.push(new Group());
  }

  deleteGroup(index: number) {
    console.log('deleting' + index)
    this.subject.groups.splice( index, 1 );
    console.log(this.subject.groups)
  }

  goBack(){
    this.backButtonPressed.emit();
  }

  addSubject() {
    this.subjectService.addSubject(this.subject).subscribe(() => {
      this.subjectAdded.emit();
    });
  }
  updateSubject() {
      this.subjectService.updateSubject(this.subject).subscribe(() => {
        this.subjectAdded.emit();
      });
  }

  propagetaAsMinutes(newVaue, index: number) {
    this.subject.groups[index].startTimeMinSinceMid = newVaue.hour * 60 + newVaue.minute;
  }
}
