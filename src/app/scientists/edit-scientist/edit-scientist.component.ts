import { FirebaseService } from './../../shared/services/firebase.service';
import { Listing } from './../../shared/models/listings.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-scientist',
  templateUrl: './edit-scientist.component.html',
  styleUrls: ['./edit-scientist.component.sass']
})
export class EditScientistComponent implements OnInit {
  public scientist: Listing;
  public scientistNumber;
  constructor(
    private routeParam: ActivatedRoute,
    private fbService: FirebaseService
  ) { }

  ngOnInit() {
    this.routeParam.params.subscribe((param: Params) => {
      this.scientistNumber = param['id'];
    });

    this.fbService.listData().subscribe((scientist) => {
      this.scientist = scientist[this.scientistNumber];
      console.log(this.scientist);
    })
  }

}
