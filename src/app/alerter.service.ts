import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AlerterService {
  public items: FirebaseListObservable<any[]>;
  public user: Observable<firebase.User>
  public msgVal: String = '';

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.items = db.list('/items', {
      query: {
        limitToLast: 10
      }
    });
    this.user = this.afAuth.authState;
  }

  pogo(event) {
    console.log(this.user);
  }

  login() {
    this.afAuth.auth.signInAnonymously();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(desc: string) {
    this.items.push({ message: desc });
    this.msgVal = '';
  }
}
