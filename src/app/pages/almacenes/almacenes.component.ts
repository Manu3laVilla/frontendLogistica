import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Almacen } from 'src/app/interfaces/almacen';
import { AlmacenesService } from 'src/app/services/almacenes.service';

@Component({
  selector: 'app-almacenes',
  templateUrl: './almacenes.component.html',
  styleUrls: ['./almacenes.component.scss']
})
export class AlmacenesComponent implements OnInit{


  almacens!: Almacen[];
  displayedColumns = ['idAlmacen','nombreAlmacen','idLogisticaAlmacen','idCiudadAlmacen','opciones'];
  dataSource!: MatTableDataSource<Almacen>;
  isSearch: boolean = false;
  search: string=  '';

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor
  (
    private almacenSvc: AlmacenesService,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void {

    if(this.search != ''){
      this.almacenSvc.getUserByNameAlmacen(this.search)
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.almacens = (this.almacens);
      },
      err => {
        //console.log(err.error);
        this.snackBar.open(err.error, 'Fail', {
          duration: 4*1000, horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      });
    } else{
      this.almacenSvc.getAlmacens().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    }

  }

  goToNewAlmacen(): void{
    this.router.navigate(['/newalmacen']);
  }

  onDelete(id: number): void {
    this.almacenSvc.deleteAlmacen(id)
    .subscribe(() => {
      this.almacenSvc.getAlmacens()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    });
  }

  onUpdate(id: number): void {
    this.router.navigate([`/newalmacen/${id}`]);
  }
}
