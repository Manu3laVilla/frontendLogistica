import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewclienteComponent } from './newcliente.component';

const routes: Routes = [{ path: '', component: NewclienteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewclienteRoutingModule { }
