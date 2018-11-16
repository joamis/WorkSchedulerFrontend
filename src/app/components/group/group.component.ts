import {Component, Input, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {GroupClass} from '../../models/GroupClass';
import {DetailedGroupComponent} from '../detailed-group/detailed-group.component';
import {GroupWithPreference} from '../../models/GroupWithPreference';
import {Preference} from '../../models/Preference';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input() groupWithPref: GroupWithPreference = new GroupWithPreference(new GroupClass(), new Preference());
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(content) {
    const modalRef = this.modalService.open(DetailedGroupComponent);
    modalRef.componentInstance.groupWithPref = this.groupWithPref;
  }
}
