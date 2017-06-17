import { MdDialog, MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  public user;
  public location: string;
  public param;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private dialog: MdDialog,
    private snackBar: MdSnackBar
  ) {
    this.user = afAuth.authState;
  }

  isAuthenticated(): boolean {
    return this.user !== null;
  }

  login() {
    this.afAuth.auth.signInAnonymously().then(() => {
      this.snackBarMsg('LOGGED IN');
    }).then(() => {
      this.dialog.closeAll();
    }).then(() => {
      if (this.location === 'edit-scientist') {
        this.router.navigate([this.location, this.param]);
      } else {
        this.router.navigate([this.location]);
      }
    });
  }

  snackBarMsg(msg) {
    this.snackBar.open('STATUS: ', msg, {
      duration: 2000
    });
  }

  setRouterParam(location, param = false) {
    this.location = location;
    this.param = param;
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.snackBarMsg('LOGGED OUT');
    }).then(() => {
      this.router.navigate(['/']);
    });
  }

}
