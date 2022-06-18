import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentialRoutingModule } from './residential-routing.module';
import { ResidentialComponent } from './residential.component';

import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatToolbarModule } from "@shared/index";
import { FormsModule, ReactiveFormsModule } from '@shared/index';


@NgModule({
  declarations: [
    ResidentialComponent
  ],
  imports: [
    CommonModule,
    ResidentialRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class ResidentialModule { }
