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

  login(name: string, password: string) {
    // tslint:disable-next-line:triple-equals
    if (password == '123') {
    // Log the user in
    this.Me = { Name: name, Pic: '', Bio: ''};
    this._Router.navigate(['/profile']);
    }
  }


  oAuthLogin(name: string, token: string, pic: string) {
    this.Me = { Name: name, Pic: 'https://en.wikipedia.org/wiki/Smiley#/media/File:Emojione_263A.svg', Bio: ''};
    this.pic = pic;
    this.token = token;
    this._Router.navigate(['/profile']);
  }
}
