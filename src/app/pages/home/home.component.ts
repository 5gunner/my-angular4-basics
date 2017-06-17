import { AuthService } from './../../shared/services/auth-service';
import { DialogService } from './../../shared/services/dialog.service';
import { LoginComponent } from './../../login/login/login.component';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ScientistDisplayService } from './../../shared/services/scientist-display.service';
import { Listing } from '../../shared/models/listings.model';
import { FirebaseService } from '../../shared/services/firebase.service';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  @ViewChild('clickButton') clickButton: ElementRef;
  @Output() passMsg: EventEmitter<any> = new EventEmitter<any>();
  private scientists: Listing[];
  private displayNumber: number;
  private selectedOption: string;

  constructor(
    private fbData: FirebaseService,
    private scientistDisplayService: ScientistDisplayService,
    public dialog: DialogService,
    private authService: AuthService
  ) {
    this.fbData.listData().subscribe(scientists => {
      this.scientists = scientists;
    });
  }

  ngOnInit() { }


  setRouterParam(location) {
    this.authService.setRouterParam(location);
  }

  setDisplayScientist(num) {
    this.scientistDisplayService.setNumber(num);
    this.displayNumber = num;
  }
}
