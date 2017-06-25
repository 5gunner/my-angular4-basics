import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MdButtonModule,
  MdInputModule,
  MdToolbarModule,
  MdMenuModule,
  MdIconModule,
  MdListModule,
  MdCardModule,
  MdDialogModule,
  MdSnackBarModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdListModule,
    MdCardModule,
    MdDialogModule,
    MdSnackBarModule,
  ],
  declarations: [],
  exports: [
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
    MdMenuModule,
    MdIconModule,
    MdListModule,
    MdCardModule,
    MdDialogModule,
    MdSnackBarModule,
  ]
})
export class MaterialModule { }
