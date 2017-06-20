import { Listing } from '../models/listings.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FirebaseService {
  public scientists: FirebaseListObservable<Listing[]>;
  constructor(private db: AngularFireDatabase) { }

  listData() {
    this.scientists = this.db.list('/scientists').catch((err) => {
      console.log(err);
      return err;
    }) as FirebaseListObservable<Listing[]>;
    return this.scientists;
  }

  addScientist(newScientist) {
    this.db.list('/scientists').push(newScientist);
  }
}
