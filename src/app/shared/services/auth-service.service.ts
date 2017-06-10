import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  public user;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  login() {
    this.afAuth.auth.signInAnonymously().then(() => {
      console.log(this.user);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
