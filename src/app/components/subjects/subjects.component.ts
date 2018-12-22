import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SingleSubjectService} from '../../services/single-subject.service';
import {Subject} from '../../models/Subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  @Output() backButtonPressed = new EventEmitter();
  additionView = 'ADDITION';
  subjectView = 'SUBJECTS';
  currentView = this.subjectView;
  subjects: Subject[] = [];
  addUpdateSubject: Subject = new Subject();
  updateOption = false

  constructor(private subjectService: SingleSubjectService) {
  }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects(): void {
    this.subjectService.getSubjects().subscribe(subjects => this.subjects = subjects);
  }

  goToSubjectsView(): void {
    this.currentView = this.subjectView;
  }

  goToSUbjectAdditionView() {
    this.currentView = this.additionView;
  }

  goToSubjectsViewAndReload() {
    this.subjectService.getSubjects().subscribe(subjects => {
        this.subjects = subjects;
        this.goToSubjectsView();
        this.addUpdateSubject = new Subject();
        this.updateOption = false
      }
    );
  }

  goBack(){
    this.backButtonPressed.emit();
  }

  updateEmittedSubject(subject: Subject) {
    this.addUpdateSubject = subject;
    this.updateOption = true
    this.goToSUbjectAdditionView();
  }

  refreshSubjects() {
    this.getSubjects()
  }
}
