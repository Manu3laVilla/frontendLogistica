import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'productos', loadChildren: () => import('./pages/productos/productos.module').then(m => m.ProductosModule) },
  { path: 'newproduct', loadChildren: () => import('./pages/productos/newproduct/newproduct.module').then(m => m.NewproductModule) },
  { path: 'newproduct/:id', loadChildren: () => import('./pages/productos/newproduct/newproduct.module').then(m => m.NewproductModule) },
  { path: 'almacenes', loadChildren: () => import('./pages/almacenes/almacenes.module').then(m => m.AlmacenesModule) },
  { path: 'newalmacen', loadChildren: () => import('./pages/almacenes/newalmacen/newalmacen.module').then(m => m.NewalmacenModule) },
  { path: 'newalmacen/:id', loadChildren: () => import('./pages/almacenes/newalmacen/newalmacen.module').then(m => m.NewalmacenModule) },
  { path: 'vehiculos', loadChildren: () => import('./pages/vehiculos/vehiculos.module').then(m => m.VehiculosModule) },
  { path: 'clientes', loadChildren: () => import('./pages/clientes/clientes.module').then(m => m.ClientesModule) },
  { path: 'pedidos', loadChildren: () => import('./pages/pedidos/pedidos.module').then(m => m.PedidosModule) },
  { path: 'newcliente', loadChildren: () => import('./pages/clientes/newcliente/newcliente.module').then(m => m.NewclienteModule) },
  { path: 'newcliente/:id', loadChildren: () => import('./pages/clientes/newcliente/newcliente.module').then(m => m.NewclienteModule) },
  { path: 'newvehiculoterrestre', loadChildren: () => import('./pages/vehiculos/newvehiculoterrestre/newvehiculoterrestre.module').then(m => m.NewvehiculoterrestreModule) },
  { path: 'newvehiculoterrestre/:id', loadChildren: () => import('./pages/vehiculos/newvehiculoterrestre/newvehiculoterrestre.module').then(m => m.NewvehiculoterrestreModule) },
  { path: 'newvehiculomaritimo', loadChildren: () => import('./pages/vehiculos/newvehiculomaritimo/newvehiculomaritimo.module').then(m => m.NewvehiculomaritimoModule) },
  { path: 'newvehiculomaritimo/:id', loadChildren: () => import('./pages/vehiculos/newvehiculomaritimo/newvehiculomaritimo.module').then(m => m.NewvehiculomaritimoModule) },
  { path: 'newpedido', loadChildren: () => import('./pages/pedidos/newpedido/newpedido.module').then(m => m.NewpedidoModule) },
  { path: 'newpedido/:id', loadChildren: () => import('./pages/pedidos/newpedido/newpedido.module').then(m => m.NewpedidoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
