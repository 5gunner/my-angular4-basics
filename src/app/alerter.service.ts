import { Injectable } from '@angular/core';

@Injectable()
export class AlerterService {

  constructor() { }

  pogo(event) {
    console.log(event);
  }
}
