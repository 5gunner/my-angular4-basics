import { AuthService } from './../../shared/services/auth-service';
import { DialogService } from './../../shared/services/dialog.service';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from './../../shared/services/firebase.service';
import { Listing } from './../../shared/models/listings.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-scientist',
  templateUrl: './edit-scientist.component.html',
  styleUrls: ['./edit-scientist.component.sass']
})
export class EditScientistComponent implements OnInit {

  public scientist: Listing = {};
  public editForm: FormGroup;
  public id: string;
  public scientistName: string;

  constructor(
    private routeParam: ActivatedRoute,
    private fbService: FirebaseService,
    private snackbar: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'dialog': new FormControl(null),
      'power': new FormControl(null),
      'about': new FormControl(null),
      'imgUrl': new FormControl(null),
    });

    this.routeParam.params.subscribe((param: Params) => {
      this.fbService.listData().subscribe((scientist) => {
        this.scientist = scientist[param['id']];
        this.scientistName = this.scientist['name'];
        this.id = this.scientist['$key'];
      })
    });

  }

  // formForbiddenScientist(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise((resolve, reject) => {
  //     this.fbData.list('/scientists').map((scientists) => {
  //       scientists.array.forEach(element => {
  //         if (element.name.indexOf(control.value)) {
  //           resolve({ 'forbiddenName': true });
  //         } else {
  //           resolve(null);
  //         }
  //       });
  //     });
  //   });
  //   return promise;
  // }

  removeScientist() {
    this.fbService.removeScientist(this.id).then(() => {
      this.snackbar.snackBarMsg(`${this.scientistName} deleted`);
      this.router.navigate(['/']);
    });
  }
}
