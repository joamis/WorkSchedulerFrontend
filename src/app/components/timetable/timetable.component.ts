import { Component, OnInit } from '@angular/core';
import {GroupClass} from '../../models/GroupClass';
import { GroupService} from '../../services/group.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  constructor(private groupService: GroupService) { }

  groups: GroupClass[] = [];

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    this.groupService.getGroups()
      .subscribe(group  => this.groups = group);
  }

}
