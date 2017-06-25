import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../material/material.module';

import { NewScientistComponent } from '../new-scientist/new-scientist.component';
import { EditScientistComponent } from '../edit-scientist/edit-scientist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    NewScientistComponent,
    EditScientistComponent
  ]
})
export class SiteFormsModule { }
