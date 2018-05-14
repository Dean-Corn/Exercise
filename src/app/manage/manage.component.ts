import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from '../services/messages.service';
import { ExerciseService } from '../services/exercise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  private _api = 'http://localhost:9080/exercise';

  constructor(
    private http: Http,
    private _Messages: MessagesService,
    private _Exercise: ExerciseService,
    private _Router: Router) { }

  ngOnInit() {
  }

  setBio(bio: string) {
    this._Messages.Messages.push({ Text: 'Bio Updated!', Type: 'success'});
    this.http.post(this._api + '/bio', { Name: this._Exercise.Me.Name, Bio: bio})
    .subscribe(data => {
    }, err => {
    console.log(err);
    });
  }

  setPic(pic: string) {
    this._Messages.Messages.push({ Text: 'Picture Updated!' + name , Type: 'success'});
    this.http.post(this._api + '/picture', { Name: this._Exercise.Me.Name, Pic: pic})
    .subscribe(data => {
    }, err => {
    console.log(err);
    });
  }


}
