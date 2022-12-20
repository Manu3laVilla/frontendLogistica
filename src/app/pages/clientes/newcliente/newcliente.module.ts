import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewclienteRoutingModule } from './newcliente-routing.module';
import { NewclienteComponent } from './newcliente.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    NewclienteComponent
  ],
  imports: [
    CommonModule,
    NewclienteRoutingModule,
    MaterialModule
  ]
})
export class NewclienteModule { }
