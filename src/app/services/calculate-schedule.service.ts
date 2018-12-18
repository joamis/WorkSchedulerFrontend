import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {calculateScheduleUrl, isScheduleCalculatedUrl, resetCalculatedScheduleUrl} from '../api';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateScheduleService {

  constructor(private http: HttpClient) {
  }


  calculateSchedule(): Observable<Object> {
    return this.http.post(calculateScheduleUrl, null);
  }

  isScheduleCalculated(): Observable<boolean>{
    return this.http.get<boolean>(isScheduleCalculatedUrl);
  }

  resetCalculateSchedule() {
    return this.http.post(resetCalculatedScheduleUrl,  null);
  }
}
