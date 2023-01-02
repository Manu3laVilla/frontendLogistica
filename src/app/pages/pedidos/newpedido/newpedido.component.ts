import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { Almacen } from 'src/app/interfaces/almacen';
import { Ciudad } from 'src/app/interfaces/ciudad';
import { Cliente } from 'src/app/interfaces/cliente';
import { Logistica } from 'src/app/interfaces/logistica';
import { Pedido } from 'src/app/interfaces/pedido';
import { Producto } from 'src/app/interfaces/producto';
import { Vehiculo } from 'src/app/interfaces/vehiculo';
import { AlmacenesService } from 'src/app/services/almacenes.service';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { LogisticasService } from 'src/app/services/logisticas.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ProductosService } from 'src/app/services/productos.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-newpedido',
  templateUrl: './newpedido.component.html',
  styleUrls: ['./newpedido.component.scss']
})
export class NewpedidoComponent implements OnInit {

  hide = true;
  model: any = {idPlan: 0, idCliente: '', idLogistica: '', idProducto: '', idVehiculo: '', idCiudad: '', idCentro: '', cantidad: ''};
  pedido: Pedido[] = [];
  logistica!: Logistica[];
  producto!: Producto[];
  cliente!: Cliente[];
  vehiculo!: Vehiculo[];
  ciudad!: Ciudad[];
  almacen!: Almacen[];


  id!: number;
  isEdit: boolean = false;

  constructor(
    private router: Router,
    private pedidoSvc: PedidosService,
    private productSvc: ProductosService,
    private logisticaSvc: LogisticasService,
    private clienteSvc: ClientesService,
    private vehiculoSvc: VehiculosService,
    private ciudadSvc: CiudadesService,
    private almacenSvc: AlmacenesService,
    private activatedRoute: ActivatedRoute
  ){
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id)
    {
      this.isEdit = true;
      this.pedidoSvc
      .getPedidos()
      .subscribe((data:Pedido[]) =>{
        this.pedido = data;
        this.model = this.pedido.find((m) => {return m.idPlan == this.id});
      },
      (error) =>{
        console.log(error);
      })
    }
    else
    {
      this.isEdit = false;
    }
  }

  ngOnInit(): void {
    this.logisticaSvc.getProducts()
    .subscribe(data => {
      this.logistica = data;
    })

    this.productSvc.getProducts()
    .subscribe(data => {
      this.producto = data;
    })

    this.pedidoSvc.getPedidos()
    .subscribe(data => {
      this.pedido = data;
    })

    this.clienteSvc.getClients()
    .subscribe(data => {
      this.cliente = data;
    })

    this.vehiculoSvc.getVehiculos()
    .subscribe(data => {
      this.vehiculo = data;
    })

    this.ciudadSvc.getProducts()
    .subscribe(data => {
      this.ciudad = data;
    })

    this.almacenSvc.getAlmacens()
    .subscribe(data => {
      this.almacen = data;
    })
  }

  onSave({ value : formData} : NgForm): void{
    if(this.isEdit)
    {
      console.log('Editar', formData);
      const data = {
        ...formData
      }
        this.pedidoSvc.updatePedidos(data,this.id)
        .pipe(
          tap(res => console.log('Pedido =>', res)),
          tap(() => this.router.navigate(['/pedidos']))
        )
        .subscribe()
    }
    else
    {
      console.log('Guardar...', formData);
      const data = {
        ...formData
      }
      this.pedidoSvc.savePedidos(data)
      .pipe(
        tap(res => console.log('Pedido =>', res)),
        tap(() => this.router.navigate(['/pedidos']))
      )
      .subscribe()
    }
  }

  cancel(){
    this.router.navigate(['/pedidos']);
  }

}