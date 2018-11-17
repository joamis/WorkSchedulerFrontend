import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../services/group.service';
import {PreferenceService} from '../../services/preference.service';
import {forkJoin} from 'rxjs';
import {GroupWithPreference} from '../../models/GroupWithPreference';
import {Preference} from '../../models/Preference';
import {GroupClass} from '../../models/GroupClass';

export class Counter {
  private preferences: Preference[] = [];
  constructor(
  public totalNumberOfPoints: number = 100,
  public usedNumberOfPoints: number = 0) {
  }


  updateNumberOfPoints(pointsAdded: number = 0): boolean
    {
      if (this.preferences.length === 0) {
        return false;
      }
    let usedNumberOfPoints = 0
       for (let i = 0; i < this.preferences.length; i++)
       {
         usedNumberOfPoints += this.preferences[i].numberOfPoints;
       }
       console.log('used number of points' + usedNumberOfPoints)
       if ((usedNumberOfPoints + pointsAdded) <= this.totalNumberOfPoints) {
         this.usedNumberOfPoints = (usedNumberOfPoints + pointsAdded)
         return true;
       }
       return false;
  }

  addPreferences(preferences: Preference[]) {
    this.preferences = preferences;
  }
}



@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})

export class TimetableComponent implements OnInit {

  constructor(private groupService: GroupService, private preferencesServiec: PreferenceService) {
  }


  counter: Counter = new Counter();
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
      this.counter.addPreferences(preferences)
      if (!this.counter.updateNumberOfPoints()) {
        console.log('Poczatkowa ilosc punktow preferencji jest nieprawidlowa')
      }
      console.log(this.counter.totalNumberOfPoints);
      for (const group of groups) {
        const groupKey: string = group.nameOfSubject + group.groupID.toString();
        if (!this.preferencesMap.has(groupKey)) {
          this.preferencesMap.set(groupKey, new Preference());
        }
        this.groups.push(new GroupWithPreference(group, this.preferencesMap.get(groupKey)));
      }
      console.log(this.preferencesMap);
    });
  }

  updatePreferences() {
    const preferences: Array<Preference> = Array.from(this.preferencesMap.values())
    this.preferencesServiec.postPreferences(preferences.filter((preference) => {
      return preference.nameOfSubject !== '';
    })).subscribe(() => console.log(this.counter.usedNumberOfPoints));
  }
}
