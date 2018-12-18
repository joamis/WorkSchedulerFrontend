import { Component, OnInit } from '@angular/core';
import {SingleSubjectService} from '../../services/single-subject.service';
import {Subject} from '../../models/Subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  additionView = 'ADDITION';
  subjectView = 'SUBJECTS';
  currentView = this.subjectView;

  subjects: Subject[] = [];
  constructor( private subjectService: SingleSubjectService) { }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects(): void {
  this.subjectService.getSubjects().subscribe(subjects => this.subjects = subjects);
  }
  addSubject(): void{
    this.currentView = this.additionView;
  }
  goToSubjectsView(): void{
    this.currentView=this.subjectView;
  }
}
