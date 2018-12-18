import { Component, OnInit } from '@angular/core';
import {SingleUserService} from '../../services/single-user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private singleUserService: SingleUserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    console.log('12345678')
      this.singleUserService.getUsers() .subscribe(users => this.users = users);;
  }

}
