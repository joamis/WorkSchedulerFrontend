import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { GroupComponent } from './components/group/group.component';
import {GroupService} from './services/group.service';
import { HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetailedGroupComponent } from './components/detailed-group/detailed-group.component';
import {PreferenceService} from './services/preference.service';
import { FormsModule } from '@angular/forms';
import { ReadyTimetableComponent } from './components/ready-timetable/ready-timetable.component';
import {ReadytimetableService} from './services/readytimetable.service';
import { RegistrationComponent } from './components/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimetableComponent,
    GroupComponent,
    DetailedGroupComponent,
    ReadyTimetableComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  entryComponents: [DetailedGroupComponent],
  providers: [GroupService, PreferenceService, ReadytimetableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
