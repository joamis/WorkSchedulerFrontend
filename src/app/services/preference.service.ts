import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {preferenceUrl} from '../api';
import {Preference} from '../models/Preference';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {

  constructor(private http: HttpClient) { }
  getPreferences(): Observable<Preference[]> {
    return this.http.get<Preference[]>(preferenceUrl);
  }
  postPreferences(preferences: Array<Preference>): Observable<Preference[]> {
    console.log(preferences);
    return this.http.post<Preference[]>(preferenceUrl, JSON.stringify(preferences));
  }
}
