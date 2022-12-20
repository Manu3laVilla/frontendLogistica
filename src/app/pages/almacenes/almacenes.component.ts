import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
  displayedColumns = ['idAlmacen','nombreAlmacen','idLogisticaAlmacen','idCiudadAlmacen','editar','eliminar'];
  dataSource!: MatTableDataSource<Almacen>;
  isSearch: boolean = false;
  search: string=  '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor
  (
    private almacenSvc: AlmacenesService,
    private router: Router){}

  ngOnInit(): void {

    if(this.search != ''){
      this.almacenSvc.getUserByNameAlmacen(this.search)
      .subscribe(data => {this.dataSource = new MatTableDataSource(data);
                          this.almacens = (this.almacens);});
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
