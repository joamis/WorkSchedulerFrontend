import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../models/User';
import {RegistrationService} from '../../services/registration.service';
import {window} from 'rxjs/operators';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  constructor(private registrationService: RegistrationService) { }
  user: User = new User();
 @Output() backButtonPressed: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit() {
  }


  registerUser() {
    this.registrationService.registerUser(this.user).subscribe(() => {
     // this.goToLogin();
      console.log('zarejestrowany');
    });
  }

  goHome() {
    this.backButtonPressed.emit('Back to home');
  }

}
