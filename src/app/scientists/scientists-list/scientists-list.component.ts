import { ScientistDisplayService } from './../../shared/services/scientist-display.service';
import { Listing } from './../../shared/models/listings.model';
import { FirebaseService } from './../../shared/services/firebase.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-scientists-list',
  templateUrl: './scientists-list.component.html',
  styleUrls: ['./scientists-list.component.sass']
})
export class ScientistsListComponent implements OnInit {
  public scientists: Listing[];

  constructor(private fbService: FirebaseService, private displayService: ScientistDisplayService) {
    this.fbService.listData().subscribe(scientists => {
      this.scientists = scientists;
    });
  }

  ngOnInit() { }

  setDisplayNumber(num) {
    this.displayService.setNumber(num);
  }
}
