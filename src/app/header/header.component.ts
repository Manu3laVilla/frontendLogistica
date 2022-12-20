import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router){}

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

}
