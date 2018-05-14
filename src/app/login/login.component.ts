import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';


declare var googleyolo: any;
declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Exercise: ExerciseService) {
  }

  ngOnInit() {
  }

  login(name: string, password: string) {
    this._Exercise.login(name, password);
  }

  googlelogin() {
    googleyolo.hint({
        supportedAuthMethods: [
        'https://accounts.google.com'
        ],
        supportedIdTokenProviders: [
            {
                uri: 'https://accounts.google.com',
                clientId: '39476413938-8j244b8rg509h81gus3iq9af9q0kgq88.apps.googleusercontent.com'
            }
        ]
    }).then((credentials: any) => {
        this._Exercise.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
        console.log(credentials);
    });
  }
}
