import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {


  pedidos!: Pedido[];
  displayedColumns = ['idPlan','guia','idClientePedido','idLogisticaPedido','costoEnvio','costoPagar','opciones'];
  dataSource!: MatTableDataSource<Pedido>;
  dato: any;
  index!: any;
  tipoLogistica: string = '';
  isSearch: boolean = false;
  search: string=  '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor
  (
    private pedidoSvc: PedidosService,
    private router: Router){}

  ngOnInit(): void {

    if(this.search != ''){
      this.pedidoSvc.getPedidoByGuia(this.search)
      .subscribe(data => {this.dataSource = new MatTableDataSource(data);
                          this.pedidos = (this.pedidos);});
    } else{
      this.pedidoSvc.getPedidos().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    }

  }

  goToNewPedido(): void{
    this.router.navigate(['/newpedido']);
  }

  onDelete(id: number): void {
    this.pedidoSvc.deletePedido(id)
    .subscribe(() => {
      this.pedidoSvc.getPedidos()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    });
  }

  onUpdate(id: number): void {
    this.router.navigate([`/newpedido/${id}`]);
  }

  onDetails(id: number): void {
    this.router.navigate([`/detail/${id}`]);
  }
}
