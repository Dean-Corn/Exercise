import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { User } from '../models/exercise';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor(public _Exercise: ExerciseService) {
  }

  ngOnInit() {
  }

}
