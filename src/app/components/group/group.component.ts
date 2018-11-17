import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {GroupClass} from '../../models/GroupClass';
import {DetailedGroupComponent} from '../detailed-group/detailed-group.component';
import {GroupWithPreference} from '../../models/GroupWithPreference';
import {Preference} from '../../models/Preference';
import {Counter} from '../timetable/timetable.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() groupWithPref: GroupWithPreference = new GroupWithPreference(new GroupClass(), new Preference());
  @Input() counter: Counter = new Counter();
  @Output() preferenceUpdated = new EventEmitter();
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    const modalRef = this.modalService.open(DetailedGroupComponent);
    modalRef.componentInstance.groupWithPref = this.groupWithPref;
    modalRef.componentInstance.counter = this.counter;
    modalRef.componentInstance.preferenceUpdated.subscribe( () => this.preferenceUpdated.emit());
  }
}
