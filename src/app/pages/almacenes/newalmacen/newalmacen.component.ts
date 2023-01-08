import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Almacen } from 'src/app/interfaces/almacen';
import { Ciudad } from 'src/app/interfaces/ciudad';
import { Logistica } from 'src/app/interfaces/logistica';
import { AlmacenesService } from 'src/app/services/almacenes.service';
import { CiudadesService } from 'src/app/services/ciudades.service';
import { LogisticasService } from 'src/app/services/logisticas.service';

@Component({
  selector: 'app-newalmacen',
  templateUrl: './newalmacen.component.html',
  styleUrls: ['./newalmacen.component.scss']
})

export class NewalmacenComponent implements OnInit {

  hide = true;
  model: any = {idAlmacen: '', nombreAlmacen: '', idLogisticaAlmacen: '', idCiudadAlmacen: ''};
  logistica!: Logistica[];
  ciudad!: Ciudad[];
  almacen!: Almacen[];
  id!: number;
  isEdit: boolean = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private router: Router,
    private almacenSvc: AlmacenesService,
    private logisticaSvc: LogisticasService,
    private ciudadSvc: CiudadesService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ){
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id)
    {
      this.isEdit = true;
      this.almacenSvc
      .getAlmacens()
      .subscribe((data:Almacen[]) =>{
        this.almacen = data;
        this.model = this.almacen.find((m) => {return m.idAlmacen == this.id})!;
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

    this.ciudadSvc.getProducts()
    .subscribe(data => {
      this.ciudad = data;
    })

    this.almacenSvc.getAlmacens()
    .subscribe(data => {
      this.almacen = data;
    })
  }

  onSave({ value : formData} : NgForm): void{
    if(this.isEdit)
    {
      console.log('Editar', formData);
      const data = {
        ...formData
      }
        this.almacenSvc.updateAlmacens(data,this.id)
        .pipe(
          tap(res => console.log('Almacen =>', res)),
          tap(() => this.snackBar.open('Almacén Editado', 'OK', {
            duration: 4*1000, horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          })),
          tap(() => this.router.navigate(['/almacenes']))
        )
        .subscribe()
    }
    else
    {
      console.log('Guardar...', formData);
      const data = {
        ...formData
      }
      this.almacenSvc.saveAlmacen(data)
      .pipe(
        tap(res => console.log('Almacen =>', res)),
        tap(() => this.snackBar.open('Almacén Creado', 'OK', {
          duration: 4*1000, horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })),
        tap(() => this.router.navigate(['/almacenes']))
      )
      .subscribe(data =>{},err => {
        //console.log(err.error);
        this.snackBar.open(err.error, 'Fail', {
          duration: 4*1000, horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      });
    }
  }

  cancel(){
    this.router.navigate(['/almacenes']);
  }
}
