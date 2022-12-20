import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewvehiculomaritimoComponent } from './newvehiculomaritimo.component';

const routes: Routes = [{ path: '', component: NewvehiculomaritimoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewvehiculomaritimoRoutingModule { }
