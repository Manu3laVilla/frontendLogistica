import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Logistica } from 'src/app/interfaces/logistica';
import { Producto } from 'src/app/interfaces/producto';
import { LogisticasService } from 'src/app/services/logisticas.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.scss']
})
export class NewproductComponent implements OnInit {

  hide = true;
  model: any = {id: 0, nombreProducto: '', idLogisticaProducto: ''};
  logistica!: Logistica[];
  producto: Producto[] = [];
  id!: number;
  isEdit: boolean = false;

  constructor(
    private router: Router,
    private productSvc: ProductosService,
    private logisticaSvc: LogisticasService,
    private activatedRoute: ActivatedRoute
  ){
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id)
    {
      this.isEdit = true;
      this.productSvc
      .getProducts()
      .subscribe((data:Producto[]) =>{
        this.producto = data;
        this.model = this.producto.find((m) => {return m.id == this.id});
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
  }

  onSave({ value : formData} : NgForm): void{
    if(this.isEdit)
    {
      console.log('Editar', formData);
      const data = {
        ...formData
      }
        this.productSvc.updateProduct(data,this.id)
        .pipe(
          tap(res => console.log('Producto =>', res)),
          tap(() => this.router.navigate(['/productos']))
        )
        .subscribe()
    }
    else
    {
      console.log('Guardar...', formData);
      const data = {
        ...formData
      }
      this.productSvc.saveProduct(data)
      .pipe(
        tap(res => console.log('Producto =>', res)),
        tap(() => this.router.navigate(['/productos']))
      )
      .subscribe()
    }
  }

  cancel(){
    this.router.navigate(['/productos']);
  }

}
