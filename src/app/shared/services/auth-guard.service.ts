import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth-service';
import { DialogService } from './dialog.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private dialog: DialogService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> {
    return this.afAuth.authState.map((auth) => {
      if (!auth) {
        this.dialog.openDialog();
        return false;
      } else {
        return true;
      }
    });
  }
}
