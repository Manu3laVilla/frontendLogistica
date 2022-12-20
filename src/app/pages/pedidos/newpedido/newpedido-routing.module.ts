import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewpedidoComponent } from './newpedido.component';

const routes: Routes = [{ path: '', component: NewpedidoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewpedidoRoutingModule { }
