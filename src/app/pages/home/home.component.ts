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

  constructor(private fbData: FirebaseService, private scientistDisplayService: ScientistDisplayService) {
    this.fbData.listData().subscribe(scientists => {
      this.scientists = scientists;
    });
  }

  ngOnInit() { }

  setDisplayScientist(num) {
    this.scientistDisplayService.setNumber(num);
  }
}
