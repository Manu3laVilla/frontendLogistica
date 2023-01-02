import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    PedidosComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    MaterialModule
  ]
})
export class PedidosModule { }
