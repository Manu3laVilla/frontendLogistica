import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  hide = true;
  model: any = {
    idPlan: 0,
    idCliente: '',
    idProducto: '',
    idLogistica: '',
    idVehiculo: '',
    idCiudad: '',
    idCentro: '',
    cantidad: '',
    costoEnvio: '',
    costoPagar: '',
    fechaRegistro: '',
    fechaEntrega: '',
    guia: ''
  };
  pedido: Pedido[] = [];
  id!: number;

  constructor(
    private router: Router,
    private pedidoSvc: PedidosService,
    private activatedRoute: ActivatedRoute
  )
  {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.pedidoSvc
      .getPedidos()
      .subscribe((data:Pedido[]) =>{
        this.pedido = data;
        this.model = this.pedido.find((m) => {return m.idPlan == this.id})!;
      },
      (error) =>{
        console.log(error);
      })
  }

  ngOnInit(): void {
    this.pedidoSvc.getPedidos()
    .subscribe(data => {
      this.pedido = data;
    })
  }

  cancel(): void {
    this.router.navigate(['/pedidos']);
  }

}
