import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../interfaces/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  private url = 'http://localhost:8080/logistica/ciudades';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Ciudad[]>{
    return this.http.get<Ciudad[]>(`${this.url}/all`)
  }

}
