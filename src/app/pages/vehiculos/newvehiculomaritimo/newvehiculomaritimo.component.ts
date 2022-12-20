import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Logistica } from 'src/app/interfaces/logistica';
import { Vehiculo } from 'src/app/interfaces/vehiculo';
import { LogisticasService } from 'src/app/services/logisticas.service';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-newvehiculomaritimo',
  templateUrl: './newvehiculomaritimo.component.html',
  styleUrls: ['./newvehiculomaritimo.component.scss']
})

export class NewvehiculomaritimoComponent implements OnInit {

  hide = true;
  model: any = {id: '', placaVehiculo: '', idLogisticaVehiculo:''};
  vehiculo: Vehiculo[] = [];
  select: any = [];
  isLogistica: boolean = true;
  logistica!: Logistica[];
  tipo!: number;
  id!: number;
  isEdit: boolean = false;

  constructor(
    private router: Router,
    private vehiculoSvc: VehiculosService,
    private logisticaSvc: LogisticasService,
    private activatedRoute: ActivatedRoute
  ){
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id)
    {
      this.isEdit = true;
      this.vehiculoSvc
      .getVehiculos()
      .subscribe((data:Vehiculo[]) =>{
        this.vehiculo = data;
        this.model = this.vehiculo.find((m) => {return m.id == this.id});
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
      this.select = this.logistica.find((c) => {return c.idLogistica == 2});
      this.model.idLogisticaVehiculo = this.select;
    console.log(this.model.idLogisticaVehiculo);
    })

    this.vehiculoSvc.getVehiculos()
    .subscribe(data=> {
      this.vehiculo = data;
    })
  }

  onSave({ value : formData} : NgForm): void{
    formData
    if(this.isEdit)
    {
      console.log('Editar', formData);
      const data = {
        ...formData
      }
        this.vehiculoSvc.updateVehiculo(data,this.id)
        .pipe(
          tap(res => console.log('Vehiculo =>', res)),
          tap(() => this.router.navigate(['/vehiculos']))
        )
        .subscribe()
    }
    else
    {
      console.log('Guardar...', formData);
      const data = {
        ...formData
      }
      this.vehiculoSvc.saveVehiculo(data)
      .pipe(
        tap(res => console.log('Vehiculo =>', res)),
        tap(() => this.router.navigate(['/vehiculos']))
      )
      .subscribe()
    }
  }

  cancel(){
    this.router.navigate(['/vehiculos']);
  }
}
