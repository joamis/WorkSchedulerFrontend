import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {RegistrationService} from '../../services/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor(private registrationService: RegistrationService) { }
  user: User = new User();
 // @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }


  registerUser() {
    this.registrationService.registerUser(this.user).subscribe(() => {
     // this.goToLogin();
      console.log('zarejestrowany');
    });
  }

 /* goToLogin() {
    this.notify.emit('Back to login');
  }*/

}
