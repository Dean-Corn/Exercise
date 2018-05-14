import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { MessagesService } from './services/messages.service';
import { ExerciseService } from './services/exercise.service';
import { ManageComponent } from './manage/manage.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LogComponent,
    ProfileComponent,
    MessagesComponent,
    LoginComponent,
    ManageComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'log', component: LogComponent },
      { path: 'login', component: LoginComponent },
      { path: 'user', component: UserComponent },
      { path: 'manage', component: ManageComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [MessagesService, ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
