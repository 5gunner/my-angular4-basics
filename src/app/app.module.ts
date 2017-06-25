import { SiteFormsModule } from './scientists/forms/Siteforms.module';
import { ServerModule } from './server/server/server.module';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';

import { DialogService } from './shared/services/dialog.service';
import { AuthService } from './shared/services/auth-service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ScientistDisplayService } from './shared/services/scientist-display.service';
import { FirebaseService } from './shared/services/firebase.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ScientistsListComponent } from './scientists/scientists-list/scientists-list.component';
import { ScientistsDetailsComponent } from './scientists/scientists-details/scientists-details.component';
import { PaintDirective } from './directives/paint.directive';
import { LoginComponent } from './login/login/login.component';
import { ScientistHomeComponent } from './scientists/scientist-home/scientist-home.component';

import { ShortenPipe } from './shared/pipes/shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScientistsListComponent,
    ScientistsDetailsComponent,
    PaintDirective,
    LoginComponent,
    ShortenPipe,
    ScientistHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ServerModule,
    SiteFormsModule
  ],
  providers: [
    FirebaseService,
    ScientistDisplayService,
    AuthGuardService,
    AuthService,
    DialogService
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
