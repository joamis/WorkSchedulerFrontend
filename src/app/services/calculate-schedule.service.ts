import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {calculateScheduleUrl} from '../api';

@Injectable({
  providedIn: 'root'
})
export class CalculateScheduleService {

  constructor(private http: HttpClient) {}

  calculateSchedule(): void {
    });

}
