import { LoginComponent } from './../../login/login/login.component';
import { MdDialog } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogService {

  constructor(
    private dialog: MdDialog
  ) { }

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);
  }

}
