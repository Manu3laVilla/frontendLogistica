import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/interfaces/models/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  hide = true;
  isLogged = false;
  isLoggedFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
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

  ngOnInit()
  {
    if(this.tokenSvc.getToken())
    {
      this.isLogged = true;
      this.isLoggedFail = false;
      this.roles = this.tokenSvc.getAuthorities();
    }
  }

  onLogin(): void
  {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    console.log(this.loginUsuario);
    this.authSvc.login(this.loginUsuario).subscribe( data => {
      this.isLogged = true;
      this.isLoggedFail = false;

      this.tokenSvc.setToken(data.token);
      this.tokenSvc.setUserName(data.userName);
      this.tokenSvc.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.router.navigate(['/']);
    },
    err =>
    {
      this.msnFail = err.error.message;
      this.snackBar.open(this.msnFail, 'Fail', {
        duration: 4*1000, horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      //console.log(err.error.message);
    }
    );
  }
}
