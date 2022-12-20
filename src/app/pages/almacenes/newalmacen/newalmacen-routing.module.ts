import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewalmacenComponent } from './newalmacen.component';

const routes: Routes = [{ path: '', component: NewalmacenComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewalmacenRoutingModule { }
