import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewvehiculoterrestreRoutingModule } from './newvehiculoterrestre-routing.module';
import { NewvehiculoterrestreComponent } from './newvehiculoterrestre.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    NewvehiculoterrestreComponent
  ],
  imports: [
    CommonModule,
    NewvehiculoterrestreRoutingModule,
    MaterialModule
  ]
})
export class NewvehiculoterrestreModule { }
