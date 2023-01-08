import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/interfaces/pedido';
import { PedidosService } from 'src/app/services/pedidos.service';
import { TokenService } from 'src/app/services/token.service';

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
  roles!: string[];
  isAdmin = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor
  (
    private pedidoSvc: PedidosService,
    private router: Router,
    private tokenSvc: TokenService,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {

    if(this.search != '')
    {
      this.pedidoSvc.getPedidoByGuia(this.search)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.pedidos = (this.pedidos);
      },
      err => {
        //console.log(err.error);
        this.snackBar.open(err.error, 'Fail', {
          duration: 4*1000, horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      });
    }
    else
    {
      this.pedidoSvc.getPedidos().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    }

    this.roles = this.tokenSvc.getAuthorities();
    this.roles.forEach( rol =>
      {
        if(rol === 'ROLE_ADMIN')
        {
          this.isAdmin = true;
        }
      });

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
