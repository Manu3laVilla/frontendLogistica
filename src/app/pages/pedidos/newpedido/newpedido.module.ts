import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewpedidoRoutingModule } from './newpedido-routing.module';
import { NewpedidoComponent } from './newpedido.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    NewpedidoComponent
  ],
  imports: [
    CommonModule,
    NewpedidoRoutingModule,
    MaterialModule
  ]
})
export class NewpedidoModule { }
