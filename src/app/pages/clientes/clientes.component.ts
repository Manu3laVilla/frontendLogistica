import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';
import { TokenService } from 'src/app/services/token.service';

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
  roles!: string[];
  isAdmin = false;
  flat = 0;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor
  (
    private clienteSvc: ClientesService,
    private router: Router,
    private tokenSvc: TokenService,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void
  {
    if(this.search != '')
    {
      this.id = Number(this.search);
      this.clienteSvc.getUserByIdentification(this.id)
      .subscribe(data =>
        {
          this.dataSource = new MatTableDataSource(data);
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
      this.clienteSvc.getClients().subscribe(data => {
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

    if(this.isAdmin == false && this.flat == 0)
    {
      this.displayedColumns.pop();
      this.flat = 1;
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
