import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../../firebase-environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [],
  exports: [
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ]
})
export class ServerModule { }
