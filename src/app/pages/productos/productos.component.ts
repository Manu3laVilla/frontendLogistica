import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { delay, filter } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{


  products!: Producto[];
  displayedColumns = ['id','nombreProducto','idlogisticaproducto','opciones'];
  dataSource!: MatTableDataSource<Producto>;
  isSearch: boolean = false;
  search: string=  '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor
  (
    private productoSvc: ProductosService,
    private router: Router){}

  ngOnInit(): void {
    if(this.search != '')
    {
      this.productoSvc.getProductByNameProduct(this.search)
      .subscribe(data => {
        console.log(data)
        this.dataSource = new MatTableDataSource(data as Producto[]);
        this.dataSource.paginator = this.paginator;
      });
    }else
    {
      this.productoSvc.getProducts().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    }
  }

  onSearch(search: string){

  }

  goToNewProduct(): void{
    this.router.navigate(['/newproduct']);
  }

  onDelete(id: number): void {
    this.productoSvc.deleteProduct(id)
    .subscribe(() => {
      this.productoSvc.getProducts()
      .subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
      })
    });
  }

  onUpdate(id: number): void {
    this.router.navigate([`/newproduct/${id}`]);
  }

}
