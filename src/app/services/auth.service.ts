import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../interfaces/models/jwt-dto';
import { LoginUsuario } from '../interfaces/models/login-usuario';
import { NuevoUsuario } from '../interfaces/models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'https://spring-logistica-back.herokuapp.com/logistica/auth';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL + '/nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO>{
    return this.httpClient.post<JwtDTO>(`${this.authURL}/login`, loginUsuario);
  }

}
