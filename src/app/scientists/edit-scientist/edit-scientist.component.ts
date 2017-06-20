import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from './../../shared/services/firebase.service';
import { Listing } from './../../shared/models/listings.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-scientist',
  templateUrl: './edit-scientist.component.html',
  styleUrls: ['./edit-scientist.component.sass']
})
export class EditScientistComponent implements OnInit {
  public scientist: Listing;
  public scientistNumber;
  public editForm: FormGroup;

  constructor(
    private routeParam: ActivatedRoute,
    private fbService: FirebaseService,
    private fbData: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'name': new FormControl(null, [Validators.required], [this.formForbiddenScientist.bind(this)]),
      'dialog': new FormControl(null),
      'power': new FormControl(null),
      'about': new FormControl(null),
      'imgUrl': new FormControl(null),
    });

    this.routeParam.params.subscribe((param: Params) => {
      this.scientistNumber = param['id'];
    });

    this.fbService.listData().subscribe((scientist) => {
      this.scientist = scientist[this.scientistNumber];
      console.log(this.scientist);
    })

  }

  formForbiddenScientist(control: FormControl): Promise<any> | Observable<any> {
    return this.fbData.list('/scientists').map((scientists) => {
      scientists.forEach(scientist => {
        if (scientist.name === control.value) {
          console.log('condition: true', scientist.power);
          return { 'scientistExists': !true };
        } else {
          return null;
        }
      })
    });
  }

}
