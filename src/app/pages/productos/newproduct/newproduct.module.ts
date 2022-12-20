import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewproductRoutingModule } from './newproduct-routing.module';
import { NewproductComponent } from './newproduct.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    NewproductComponent
  ],
  imports: [
    CommonModule,
    NewproductRoutingModule,
    MaterialModule
  ]
})
export class NewproductModule { }
