import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-newcliente',
  templateUrl: './newcliente.component.html',
  styleUrls: ['./newcliente.component.scss']
})

export class NewclienteComponent implements OnInit {

  hide = true;
  model: any = {id: 0, identificacion: '', nombreCliente: '', apellidoCliente: '', direccionCliente: '', correoCliente: '', telefonoCliente: ''};
  cliente: Cliente[] = [];
  id!: number;
  isEdit: boolean = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private router: Router,
    private clienteSvc: ClientesService,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar
  ){
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id)
    {
      this.isEdit = true;
      this.clienteSvc
      .getClients()
      .subscribe((data:Cliente[]) =>{
        this.cliente = data;
        this.model = this.cliente.find((m) => {return m.id == this.id})!;
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
    this.clienteSvc.getClients()
    .subscribe(data => {
      this.cliente = data;
    })
  }

  onSave({ value : formData} : NgForm): void{
    if(this.isEdit)
    {
      console.log('Editar', formData);
      const data = {
        ...formData
      }
        this.clienteSvc.updateClient(data,this.id)
        .pipe(
          tap(res => console.log('Cliente =>', res)),
          tap(() => this.snackBar.open('Cliente Editado', 'OK', {
            duration: 4*1000, horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          })),
          tap(() => this.router.navigate(['/clientes']))
        )
        .subscribe()
    }
    else
    {
      console.log('Guardar...', formData);
      const data = {
        ...formData
      }
      this.clienteSvc.saveClient(data)
      .pipe(
        tap(res => console.log('Cliente =>', res)),
        tap(() => this.snackBar.open('Cliente Creado', 'OK', {
          duration: 4*1000, horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })),
        tap(() => this.router.navigate(['/clientes']))
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
    this.router.navigate(['/clientes']);
  }

}
