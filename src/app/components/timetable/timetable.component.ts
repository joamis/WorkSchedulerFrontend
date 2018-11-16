import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../services/group.service';
import {PreferenceService} from '../../services/preference.service';
import {forkJoin} from 'rxjs';
import {GroupWithPreference} from '../../models/GroupWithPreference';
import {Preference} from '../../models/Preference';
import {GroupClass} from '../../models/GroupClass';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  constructor(private groupService: GroupService, private preferencesServiec: PreferenceService) {
  }

  groups: GroupWithPreference[] = [];
  preferencesMap: Map<string, Preference> = new Map();

  ngOnInit() {
    this.getGroups();
  }

  getGroups(): void {
    forkJoin(this.groupService.getGroups(), this.preferencesServiec.getPreferences()).subscribe(results => {
      const groups: GroupClass[] = results[0];
      const preferences: Preference[] = results[1];
      preferences.forEach((preference) => {
        this.preferencesMap.set(preference.nameOfSubject + preference.groupID.toString(), preference);
      });
      for (const group of groups) {
        const groupKey: string = group.nameOfSubject + group.groupID.toString()
        if (!this.preferencesMap.has(groupKey)) {
          this.preferencesMap.set(groupKey, new Preference());
        }
        this.groups.push(new GroupWithPreference(group, this.preferencesMap.get(groupKey)));
      }
      console.log(this.groups);
      console.log(this.preferencesMap);
    });
  }
}
