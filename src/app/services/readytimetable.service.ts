import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {readyTimetableUrl} from '../api';
import {GroupClass} from '../models/GroupClass';

@Injectable({
  providedIn: 'root'
})
export class ReadytimetableService {

  constructor(private http: HttpClient) { }

  getReadyTimetable(): Observable<GroupClass[]> {
    console.log();
    return this.http.get<GroupClass[]>(readyTimetableUrl);
  }
}
