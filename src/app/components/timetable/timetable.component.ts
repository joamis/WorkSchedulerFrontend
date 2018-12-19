import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GroupService} from '../../services/group.service';
import {PreferenceService} from '../../services/preference.service';
import {forkJoin} from 'rxjs';
import {GroupWithPreference} from '../../models/GroupWithPreference';
import {Preference} from '../../models/Preference';
import {GroupClass} from '../../models/GroupClass';
import {LoggedStudentService} from '../../services/logged-student.service';
import {Student, SubjectId} from '../../models/Student';

export class Counter {
  private preferences: Preference[] = [];

  constructor(
    public totalNumberOfPoints: number = 100,
    public usedNumberOfPoints: number = 0) {
  }


  updateNumberOfPoints(pointsAdded: number = 0): boolean {
    if (this.preferences.length === 0) {
      return false;
    }
    let usedNumberOfPoints = 0;
    for (let i = 0; i < this.preferences.length; i++) {
      console.log(this.preferences[i]);
      if (this.preferences[i].nameOfSubject === '') {
        continue;
      }
      usedNumberOfPoints += this.preferences[i].numberOfPoints;
    }
    console.log('used number of points' + usedNumberOfPoints);
    if ((usedNumberOfPoints + pointsAdded) <= this.totalNumberOfPoints) {
      this.usedNumberOfPoints = (usedNumberOfPoints + pointsAdded);
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

export class TimetableComponent implements OnInit, OnChanges {

  constructor(private groupService: GroupService, private preferencesService: PreferenceService) {
  }

  @Input() student: Student;
  counter: Counter = new Counter();
  groups: GroupWithPreference[] = [];
  preferencesMap: Map<string, Preference> = new Map();

  ngOnInit() {
    this.reloadGroups();
  }

  private reloadGroups() {
    if (this.student) {
      console.log('Reloading groups');
      this.getGroups();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.reloadGroups();
  }


  getGroups(): void {
      console.log('1234t45t45ptk45ptk45tp4')
    forkJoin(this.groupService.getGroups(), this.preferencesService.getPreferences(this.student)).subscribe(results => {
      this.counter = new Counter();
      this.groups = [];
      this.preferencesMap.clear();
      const groups: GroupClass[] = results[0];
      const preferences: Preference[] = results[1];
      console.log(results[1]);
      console.log(preferences);
      preferences.forEach((preference) => {
        this.preferencesMap.set(preference.nameOfSubject + preference.groupID.toString(), preference);
      });
      this.counter.addPreferences(preferences);
      if (!this.counter.updateNumberOfPoints()) {
        console.log('Poczatkowa ilosc punktow preferencji jest nieprawidlowa');
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
    const preferences: Array<Preference> = Array.from(this.preferencesMap.values());
    this.preferencesService.postPreferences(preferences.filter((preference) => {
      return preference.nameOfSubject !== '';
    }), () => {
      this.reloadGroups();
    });
  }
}
