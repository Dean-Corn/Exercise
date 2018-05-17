import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


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
import { SearchComponent } from './search/search.component';




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
    UserComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'log', component: LogComponent },
      { path: 'login', component: LoginComponent },
      { path: 'user/:userName', component: UserComponent },
      { path: 'manage', component: ManageComponent },
      { path: 'search', component: SearchComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [MessagesService, ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
