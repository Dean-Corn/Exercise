import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { User } from '../models/exercise';
import { MessagesService } from './messages.service';


@Injectable()
export class ExerciseService {
  Me: User;
  token: string;
  pic: string;

  constructor(private http: Http, private _Messages: MessagesService, private _Router: Router) {

   }

  login(name: string) {
    this.Me = { Name: name, Pic: 'https://upload.wikimedia.org/wikipedia/en/d/df/Smiley_face_2.jpg', Bio: ''};
    this._Router.navigate(['/profile']);
    }


  oAuthLogin(name: string, token: string, pic: string) {
    this.Me = { Name: name, Pic: 'https://upload.wikimedia.org/wikipedia/en/d/df/Smiley_face_2.jpg', Bio: ''};
    this.pic = pic;
    this.token = token;
    this._Router.navigate(['/profile']);
  }
}
