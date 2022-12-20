import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewpedidoRoutingModule } from './newpedido-routing.module';
import { NewpedidoComponent } from './newpedido.component';


@NgModule({
  declarations: [
    NewpedidoComponent
  ],
  imports: [
    CommonModule,
    NewpedidoRoutingModule
  ]
})
export class NewpedidoModule { }
