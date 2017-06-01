import { Component } from '@angular/core';
import { state, style, animate, transition, trigger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('heading', [
      transition('invisible <=> visible', animate('300ms ease', keyframes([
        style({
          opacity: '0',
          transform: 'translateX(-20px)',
          offset: 0
        }),
        style({
          opacity: '1',
          transform: 'translateX(20px)',
          offset: .5
        }),
        style({
          opacity: '1',
          transform: 'translateX(0)',
          offset: 1
        })
      ])))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  state = 'invisible';

  togglestate() {
    this.state = this.state === 'invisible' ? 'visible' : 'invisible';
  }
}
