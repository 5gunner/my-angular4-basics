import { AlerterService } from './../alerter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.sass']
})
export class MyNewComponentComponent implements OnInit {
  me = [{
    name: 'Pratik Rai',
    age: 28,
    nationality: 'Nepalese'
  }];

  singleStyle = "text-center";

  styles = {
    'text-center': true,
    'text-uppercase': true
  }

  constructor(private alertsys: AlerterService) { }

  ngOnInit() {
  }

  alerter(event) {
    console.log(event);
  }

}
