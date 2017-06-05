import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ScientistDisplayService {
  public num: number;
  public subject: Subject<number> = new Subject<number>();

  setNumber(num: number): void {
    this.num = num;
    this.subject.next(num);
  }

  getNumber(): Observable<number> {
    return this.subject.asObservable();
  }
}
