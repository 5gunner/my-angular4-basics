import { Listing } from '../models/listings.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  items: FirebaseListObservable<Listing[]>;
  constructor(private db: AngularFireDatabase) { }

  listData() {
    this.items = this.db.list('/scientists') as FirebaseListObservable<Listing[]>;
    return this.items;
  }
}
