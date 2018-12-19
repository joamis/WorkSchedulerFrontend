import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SingleUserService} from '../../services/single-user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Output() backButtonPressed = new EventEmitter();
  users: User[] = [];
  additionView = 'ADDITION';
  usersView = 'USERS';
  currentView = this.usersView;
  user: User;

  constructor(private singleUserService: SingleUserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
      this.singleUserService.getUsers() .subscribe(users => this.users = users);
  }

  goToUserAdditionView(){
    this.currentView = this.additionView;
  }

  goToUsersView(): void {
    this.currentView = this.usersView;
  }

  goToUsersViewAndReload() {
    console.log('1234567')
    this.singleUserService.getUsers().subscribe(users => {
        this.users = users;
        this.goToUsersView();
      }
    );
  }
  goBack() {
    this.backButtonPressed.emit();
  }

}
