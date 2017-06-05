import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.sass']
})
export class MyNewComponentComponent implements OnInit {
  list: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  addNameToList(par) {
    this.list.push(par);
  }

}
