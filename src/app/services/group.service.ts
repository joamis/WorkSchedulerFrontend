import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupClass} from '../models/GroupClass';
import { HttpClient} from '@angular/common/http';
import { groupUrl } from '../api';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getGroups(): Observable<GroupClass[]> {
    console.log(groupUrl);
    return this.http.get<GroupClass[]>(groupUrl);
  }
}
