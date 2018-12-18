import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { GroupComponent } from './components/group/group.component';
import {GroupService} from './services/group.service';
import { HttpClientModule} from '@angular/common/http';
import {NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailedGroupComponent } from './components/detailed-group/detailed-group.component';
import {PreferenceService} from './services/preference.service';
import { FormsModule } from '@angular/forms';
import { ReadyTimetableComponent } from './components/ready-timetable/ready-timetable.component';
import {ReadytimetableService} from './services/readytimetable.service';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import {LoginService} from './services/login.service';
import {LoggedStudentService} from './services/logged-student.service';
import { AssignedWorkScheduleComponent } from './components/assigned-work-schedule/assigned-work-schedule.component';
import { AdminComponent } from './components/admin/admin.component';
import { CalculateScheduleComponent } from './components/calculate-schedule/calculate-schedule.component';
import {CalculateScheduleService} from './services/calculate-schedule.service';
import { UsersComponent } from './components/users/users.component';
import { SingleUserComponent } from './components/single-user/single-user.component';
import { StudentsComponent } from './components/students/students.component';
import { SingleStudentComponent } from './components/single-student/single-student.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimetableComponent,
    GroupComponent,
    DetailedGroupComponent,
    ReadyTimetableComponent,
    RegistrationComponent,
    LoginComponent,
    AssignedWorkScheduleComponent,
    AdminComponent,
    CalculateScheduleComponent,
    UsersComponent,
    SingleUserComponent,
    StudentsComponent,
    SingleStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  entryComponents: [DetailedGroupComponent, CalculateScheduleComponent],
  providers: [GroupService, PreferenceService, ReadytimetableService, LoginService, LoggedStudentService, NgbActiveModal, CalculateScheduleService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
