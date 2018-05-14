import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from '../services/messages.service';
import { ExerciseService } from '../services/exercise.service';
import { Router } from '@angular/router';
import { User, Log } from '../models/exercise';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  Me: User;
  Logs: Log [];

  private _api = 'http://localhost:9080/exercise';

  constructor(
    private http: Http,
    private _Messages: MessagesService,
    private _Exercise: ExerciseService,
    private _Router: Router) {
  }

  ngOnInit() {
  }

  addLog(date: string, etype: string, time: number) {
    this._Messages.Messages.push({ Text: 'Welcome ' + name , Type: 'success'});
    this.http.post(this._api + '/logs', { Name: this.Me.Name, Log: {Date: date, ExerciseType: etype, ExerciseTime: time}})
    .subscribe(data => {
    }, err => {
    console.log(err);
    });
  }
}
