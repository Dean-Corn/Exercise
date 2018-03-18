import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  Messages: string[];
  Visable: boolean;

  constructor() {
    this.Messages = ['Login is currently disabled.'];
    this.Visable = true;
   }

  ngOnInit() {
  }

  showAlert() {
    this.Visable = true;
  }

  hideAlert() {
    this.Visable = false;
  }

}
