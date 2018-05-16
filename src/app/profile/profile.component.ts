import { Component, OnInit } from '@angular/core';
import { User, Exercise, Log } from '../models/exercise';
import { MessagesService } from '../services/messages.service';
import { ExerciseService } from '../services/exercise.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Me: User;
  Logs: Log [];

  private _api = 'http://localhost:9080/exercise';


  constructor(
    private http: Http,
    private _Messages: MessagesService,
    private _Exercise: ExerciseService,
    private _Router: Router) {

      this.Me = _Exercise.Me;
      if (!this.Me) {
        _Router.navigate(['/login']);
      }
      this.login(this.Me.Name);
      setInterval(() => this.refresh(), 1000);
  }

  ngOnInit() {
  }

  refresh() {
    this.http.get(this._api + '/users/' + this.Me.Name)
      .subscribe(data => {
          this.Me = data.json();
          this.getLogs(this.Me.Name);
      });
  }

  login(name: string) {
    this._Messages.Messages.push({ Text: 'Welcome ' + name , Type: 'success'});
    this.http.post(this._api + '/exerciselogin', { Name: name })
    .subscribe(data => {
    }, err => {
    console.log(err);
    });
  }

  getLogs(name: string) {
    this.http.get(this._api + '/logs/' + name).subscribe(data => {
      this.Logs = data.json();
    });
  }

}
