import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/interfaces/vehiculo';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit{


  vehiculos!: Vehiculo[];
  displayedColumns = ['id','placaVehiculo','idLogisticaVehiculo','opciones'];
  dataSource!: MatTableDataSource<Vehiculo>;
  dato: any;
  index!: any;
  tipoLogistica: string = '';
  isSearch: boolean = false;
  search: string=  '';

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor
  (
    private vehiculoSvc: VehiculosService,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {

    if(this.search != ''){
      this.vehiculoSvc.getVehiculoByPlacaVehiculo(this.search)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.vehiculos = (this.vehiculos);
      },
      err => {
        //console.log(err.error);
        this.snackBar.open(err.error, 'Fail', {
          duration: 4*1000, horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      });
    } else{
      this.vehiculoSvc.getVehiculos().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    }

  }

  goToNewVehiculoTerrestre(): void{
    this.router.navigate(['/newvehiculoterrestre']);
  }

  goToNewVehiculoMaritimo(): void{
    this.router.navigate(['/newvehiculomaritimo']);
  }

  onDelete(id: number): void {
    this.vehiculoSvc.deleteVehiculo(id)
    .subscribe(() => {
      this.vehiculoSvc.getVehiculos()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    });
  }

  onUpdate(id: number): void {
    this.dato = this.dataSource.data.find((m) => {return m.id == id})

    if(this.dato.idLogisticaVehiculo.idLogistica == 1){
      this.router.navigate([`/newvehiculoterrestre/${id}`]);
    }else if(this.dato.idLogisticaVehiculo.idLogistica == 2){
      this.router.navigate([`/newvehiculomaritimo/${id}`]);
    }

  }
}
