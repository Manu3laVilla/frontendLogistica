import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewalmacenRoutingModule } from './newalmacen-routing.module';
import { NewalmacenComponent } from './newalmacen.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    NewalmacenComponent
  ],
  imports: [
    CommonModule,
    NewalmacenRoutingModule,
    MaterialModule
  ]
})
export class NewalmacenModule { }
