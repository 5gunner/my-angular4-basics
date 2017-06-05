import { Listing } from './../../shared/models/listings.model';
import { FirebaseService } from './../../shared/services/firebase.service';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-scientists-list',
  templateUrl: './scientists-list.component.html',
  styleUrls: ['./scientists-list.component.sass']
})
export class ScientistsListComponent implements OnInit {
  private scientists: Listing[];
  @Output() scientistNumber: EventEmitter<number> = new EventEmitter<number>();

  constructor(private fbService: FirebaseService) {
    this.fbService.listData().subscribe(scientists => {
      this.scientists = scientists;
    });
  }

  ngOnInit() { }

  passNumber(num) {
    this.scientistNumber.emit(num);
  }
}
