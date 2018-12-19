import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/User';
import {SingleUserService} from '../../services/single-user.service';

@Component({
  selector: 'app-user-addition',
  templateUrl: './user-addition.component.html',
  styleUrls: ['./user-addition.component.css']
})
export class UserAdditionComponent implements OnInit {


  user = new User();
  @Output() backButtonPressed = new EventEmitter();
  @Output() userAdded = new EventEmitter();
  constructor(private userService: SingleUserService) { }

  ngOnInit() {
  }

  addUser(){
    this.userService.addUser(this.user).subscribe(() => {
      this.userAdded.emit();
    });
  }

}
