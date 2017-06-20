import { FirebaseService } from './../../shared/services/firebase.service';
import { Listing } from './../../shared/models/listings.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-scientist',
  templateUrl: './new-scientist.component.html',
  styleUrls: ['./new-scientist.component.sass', '../edit-scientist/edit-scientist.component.sass']
})
export class NewScientistComponent implements OnInit {
  public newMadScientist: Listing = {};
  public scientists: Listing[];

  constructor(
    private fbase: FirebaseService,
  ) { }

  ngOnInit() {
    this.fbase.listData().subscribe((scientists) => {
      console.log(scientists);
      this.scientists = scientists;
    });
  }

  addNewScientist() {
    this.fbase.addScientist(this.newMadScientist);
  }

}
