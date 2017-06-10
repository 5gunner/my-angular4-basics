import { FirebaseService } from './firebase.service';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ScientistDisplayService {
  public num: number;
  public setNumberEmitter = new EventEmitter<number>();
  public subject: Subject<number> = new Subject<number>();

  constructor() { }

  // setNumber(num: number): void {
  //   this.num = num;
  //   this.subject.next(num);
  // }

  // getNumber(): Observable<number> {
  //   return this.subject.asObservable();
  // }

  setNumber(num) {
    this.setNumberEmitter.emit(num);
  }
}
