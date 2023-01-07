import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isLogged = false;
  roles!: string[];
  isAdmin = false;

  constructor
  (
    private tokenSvc: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void
  {
    if(this.tokenSvc.getToken())
    {
      this.isLogged = true;
    }
    else
    {
      this.isLogged = false;
    }

    this.roles = this.tokenSvc.getAuthorities();
    this.roles.forEach( rol =>
      {
        if(rol === 'ROLE_ADMIN')
        {
          this.isAdmin = true;
        }
      });
  }

  goToProducts(): void{
    this.router.navigate(['/productos']);
  }

  goToAlmacens(): void{
    this.router.navigate(['/almacenes']);
  }

  goToVehiculos(): void{
    this.router.navigate(['/vehiculos']);
  }

  goToClientes(): void{
    this.router.navigate(['/clientes']);
  }

  goToPedidos(): void{
    this.router.navigate(['/pedidos']);
  }

  goToLogin(): void{
    this.router.navigate(['/login']);
  }

  goToHome(): void{
    this.router.navigate(['/']);
  }

  onLogOut(): void
  {
    this.tokenSvc.logOut();
    window.location.reload();
  }

}
