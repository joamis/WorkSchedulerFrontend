import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {GroupClass} from '../../models/GroupClass';
import {GroupWithPreference} from '../../models/GroupWithPreference';
import {Preference} from '../../models/Preference';
import {Counter} from '../timetable/timetable.component';


@Component({
  selector: 'app-detailed-group',
  templateUrl: './detailed-group.component.html',
  styleUrls: ['./detailed-group.component.css']
})
export class DetailedGroupComponent implements OnInit {
  @Input() groupWithPref: GroupWithPreference = new GroupWithPreference(new GroupClass(), new Preference());
  @Input() counter: Counter = new Counter();
  @Output() preferenceUpdated = new EventEmitter();

  increaseValue: number;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  updatePreference() {
    const increaseNumber: number = this.increaseValue;
    if (this.counter.updateNumberOfPoints(increaseNumber)) {
      this.groupWithPref.preference.nameOfSubject = this.groupWithPref.group.nameOfSubject;
      this.groupWithPref.preference.groupID = this.groupWithPref.group.groupID;
      this.groupWithPref.preference.numberOfPoints += increaseNumber;
      console.log(this.counter.usedNumberOfPoints);
      this.preferenceUpdated.emit();
    } else {
      alert('Masz za malo punktow!');
    }
  }

  deletePreference() {
    this.groupWithPref.preference.nameOfSubject = '';
    this.counter.updateNumberOfPoints();
    this.preferenceUpdated.emit();
    console.log(this.groupWithPref.preference);

  }
}
