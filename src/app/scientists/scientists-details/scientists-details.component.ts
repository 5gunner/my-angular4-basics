import { Scientist } from './../../shared/models/scientist.model';
import { ScientistDisplayService } from './../../shared/services/scientist-display.service';
import { Listing } from './../../shared/models/listings.model';
import { FirebaseService } from './../../shared/services/firebase.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scientists-details',
  templateUrl: './scientists-details.component.html',
  styleUrls: ['./scientists-details.component.sass']
})
export class ScientistsDetailsComponent implements OnInit {
  public scientists: Listing[];
  public displayScientist;

  constructor(
    private fbService: FirebaseService,
    private scientistDisplayService: ScientistDisplayService
    ) {
    this.fbService.listData().subscribe(scientists => {
      this.scientists = scientists;
      this.displayScientist = scientists[0];
    });
  }

  ngOnInit() {
    this.scientistDisplayService.getNumber().subscribe(num => {
      this.displayScientist = <any>this.scientists[num];
    })
  }

}
