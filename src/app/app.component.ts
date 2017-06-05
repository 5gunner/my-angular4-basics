import { Component } from '@angular/core';
import { state, style, animate, transition, trigger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  recieveMsg(event) {
    console.log(event);
  }
}
