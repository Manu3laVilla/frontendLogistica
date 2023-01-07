import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/interfaces/models/nuevo-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit{

  hide = true;
  isLogged = false;
  isRegister = false;
  isRegisterFail=false;
  nuevoUsuario!: NuevoUsuario;
  nombreUsuario!: string;
  userName!: string;
  correoUsuario!: string;
  passUsuario!: string;
  msnFail!: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor
  (
    private tokenSvc: TokenService,
    private authSvc: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ){}

  ngOnInit(): void
  {
    if(this.tokenSvc.getToken())
    {
      this.isLogged = true;
    }
  }

  onRegister(): void
  {

    this.nuevoUsuario = new NuevoUsuario(this.nombreUsuario, this.userName, this.correoUsuario, this.passUsuario);
    console.log(this.nuevoUsuario);
    this.authSvc.nuevo(this.nuevoUsuario).subscribe({
      next: (data) => {
        console.log(data);
        this.snackBar.open('Cuenta Creada', 'OK', {
          duration: 4*1000, horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
        this.router.navigate(['/login']);
      },
      error: (err) => {
        //console.log(err.error);
        this.msnFail = err.error;
        this.snackBar.open(this.msnFail, 'Fail', {
          duration: 4*1000, horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        });
      }
    });
  }

}
