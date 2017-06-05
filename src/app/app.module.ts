import { ScientistDisplayService } from './shared/services/scientist-display.service';
import { FirebaseService } from './shared/services/firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MdButtonModule, MdInputModule, MdToolbarModule, MdMenuModule, MdIconModule, MdListModule, MdCardModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { environment } from './firebase-environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HeaderComponent } from './header/header.component';
import { ScientistsListComponent } from './scientists/scientists-list/scientists-list.component';
import { ScientistsDetailsComponent } from './scientists/scientists-details/scientists-details.component';
import { HomeComponent } from './pages/home/home.component';
import { PaintDirective } from './directives/paint.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    HeaderComponent,
    ScientistsListComponent,
    ScientistsDetailsComponent,
    HomeComponent,
    PaintDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdListModule,
    MdCardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [FirebaseService, ScientistDisplayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
