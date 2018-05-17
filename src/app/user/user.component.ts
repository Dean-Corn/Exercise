import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from '../services/messages.service';
import { ExerciseService } from '../services/exercise.service';
import { Router, ActivatedRoute, ParamMap, convertToParamMap } from '@angular/router';
import { User, Log } from '../models/exercise';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private _api = 'http://localhost:9080/exercise';

  Me: User;
  Logs: Log [];
  UserName: string;

  constructor(
    private http: Http,
    private _Messages: MessagesService,
    private _Exercise: ExerciseService,
    private _Router: Router,
    private route: ActivatedRoute) {
      console.log(this._Router.url);
      setInterval(() => this.refresh(), 1000);
    }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.UserName = paramMap.get('userName');
    });
  }

  getLogs(name: string) {
    this.http.get(this._api + '/logs/' + name).subscribe(data => {
      this.Logs = data.json();
    });
  }

  getUser(name: string) {
    this.http.get(this._api + '/users/' + name)
    .subscribe(data => {
      this.Me = data.json();
    }, err => {
    console.log(err);
    });
  }

  refresh() {
    this.getUser(this.UserName);
    this.getLogs(this.UserName);
  }
}
