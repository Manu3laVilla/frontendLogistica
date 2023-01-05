import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{

  clients!: Cliente[];
  displayedColumns = ['id','identificacion','nombreCliente','correoCliente','opciones'];
  dataSource!: MatTableDataSource<Cliente>;
  id!: any;
  search: string = '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor
  (
    private clienteSvc: ClientesService,
    private router: Router){}

  ngOnInit(): void {
    if(this.search != ''){
      this.id = Number(this.search);
      this.clienteSvc.getUserByIdentification(this.id)
      .subscribe(data => {this.dataSource = new MatTableDataSource(data)});
    } else
    {
      this.clienteSvc.getClients().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    }

  }

  goToNewClient(): void{
    this.router.navigate(['/newcliente']);
  }

  onDelete(id: number): void {
    this.clienteSvc.deleteClient(id)
    .subscribe(() => {
      this.clienteSvc.getClients()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    });
  }

  onUpdate(id: number): void {
    this.router.navigate([`/newcliente/${id}`]);
  }
}
