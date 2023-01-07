import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isLogged = false;
  nombreUsuario = '';

  constructor
  (
    private tokenSvc: TokenService
  ){}

  ngOnInit(): void
  {
    if(this.tokenSvc.getToken())
    {
      this.isLogged = true;
      this.nombreUsuario = this.tokenSvc.getUserName();
    }
    else
    {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

}
