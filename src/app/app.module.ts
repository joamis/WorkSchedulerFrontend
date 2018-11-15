import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { GroupComponent } from './components/group/group.component';
import {GroupService} from './services/group.service';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimetableComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
