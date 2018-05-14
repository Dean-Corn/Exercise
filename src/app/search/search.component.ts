import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { ExerciseService } from '../services/exercise.service';
import { MessagesService } from '../services/messages.service';
import { Http } from '@angular/http';
import { User } from '../models/exercise';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private _api = 'http://localhost:9080/exercise';
  public model: any;

  names: string[];

  constructor(
    private http: Http,
    private _Messages: MessagesService,
    private _Exercise: ExerciseService,
    private _Router: Router) { }

  ngOnInit() {
  }

  search = (text: Observable<string>) => {
    text.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(
        term => term.length < 2 ? this.names : this.http.get(this._api + '/allusers/' + term).subscribe(data => this.names = data.json())
      ));
  }

}
