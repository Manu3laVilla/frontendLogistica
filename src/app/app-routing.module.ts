import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService as guard } from './guards/guard.service';

const routes: Routes = [
  { path: '', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  { path: 'productos', loadChildren: () => import('./pages/productos/productos.module').then(m => m.ProductosModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'newproduct', loadChildren: () => import('./pages/productos/newproduct/newproduct.module').then(m => m.NewproductModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'newproduct/:id', loadChildren: () => import('./pages/productos/newproduct/newproduct.module').then(m => m.NewproductModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'almacenes', loadChildren: () => import('./pages/almacenes/almacenes.module').then(m => m.AlmacenesModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'newalmacen', loadChildren: () => import('./pages/almacenes/newalmacen/newalmacen.module').then(m => m.NewalmacenModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'newalmacen/:id', loadChildren: () => import('./pages/almacenes/newalmacen/newalmacen.module').then(m => m.NewalmacenModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'vehiculos', loadChildren: () => import('./pages/vehiculos/vehiculos.module').then(m => m.VehiculosModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'clientes', loadChildren: () => import('./pages/clientes/clientes.module').then(m => m.ClientesModule), canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'pedidos', loadChildren: () => import('./pages/pedidos/pedidos.module').then(m => m.PedidosModule), canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'newcliente', loadChildren: () => import('./pages/clientes/newcliente/newcliente.module').then(m => m.NewclienteModule), canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'newcliente/:id', loadChildren: () => import('./pages/clientes/newcliente/newcliente.module').then(m => m.NewclienteModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'newvehiculoterrestre', loadChildren: () => import('./pages/vehiculos/newvehiculoterrestre/newvehiculoterrestre.module').then(m => m.NewvehiculoterrestreModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'newvehiculoterrestre/:id', loadChildren: () => import('./pages/vehiculos/newvehiculoterrestre/newvehiculoterrestre.module').then(m => m.NewvehiculoterrestreModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'newvehiculomaritimo', loadChildren: () => import('./pages/vehiculos/newvehiculomaritimo/newvehiculomaritimo.module').then(m => m.NewvehiculomaritimoModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'newvehiculomaritimo/:id', loadChildren: () => import('./pages/vehiculos/newvehiculomaritimo/newvehiculomaritimo.module').then(m => m.NewvehiculomaritimoModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'newpedido', loadChildren: () => import('./pages/pedidos/newpedido/newpedido.module').then(m => m.NewpedidoModule), canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'newpedido/:id', loadChildren: () => import('./pages/pedidos/newpedido/newpedido.module').then(m => m.NewpedidoModule), canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'detail', loadChildren: () => import('./pages/pedidos/detail/detail.module').then(m => m.DetailModule), canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'detail/:id', loadChildren: () => import('./pages/pedidos/detail/detail.module').then(m => m.DetailModule), canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'registro', loadChildren: () => import('./auth/registro/registro.module').then(m => m.RegistroModule) },
  { path: 'index', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
