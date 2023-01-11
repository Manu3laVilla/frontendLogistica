import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Almacen } from '../interfaces/almacen';

@Injectable({
  providedIn: 'root'
})
export class AlmacenesService {

  private url = 'https://spring-logistica-back.herokuapp.com/logistica/almacenes';

  constructor(private http: HttpClient) { }

  getAlmacens(): Observable<Almacen[]>{
    return this.http.get<Almacen[]>(`${this.url}/all`)
  }

  saveAlmacen(almacen: Almacen): Observable<Almacen>{
    return this.http.post<Almacen>(`${this.url}/save`, almacen);
  }

  deleteAlmacen(id: number){
    return this.http.delete(`${this.url}/${id}/delete`)
  }

  updateAlmacens(almacen: Almacen, id: number):Observable<Almacen>{
    return this.http.put<Almacen>(`${this.url}/${id}/update`, almacen);
  }

  getUserByNameAlmacen(nameAlmacen:string): Observable<Almacen[]>{
    return this.http.get<Almacen[]>(`${this.url}/by/${nameAlmacen}`);
  }

  getUserByAlmacenLogisticaCiudad(idLogistica: number, idCiudad: number): Observable<Almacen[]>{
    return this.http.get<Almacen[]>(`${this.url}/byAlmacen/${idLogistica}_${idCiudad}`);
  }

}
