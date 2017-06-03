import { AlerterService } from './../alerter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.sass']
})
export class MyNewComponentComponent implements OnInit {
  list: string[] = [];

  constructor(private alertsys: AlerterService) { }

  ngOnInit() {
  }

  addNameToList(par) {
    this.list.push(par);
  }

}
