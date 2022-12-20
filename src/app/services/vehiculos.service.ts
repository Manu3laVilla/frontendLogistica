import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../interfaces/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private url = 'http://localhost:8080/logistica/vehiculos';

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.url}/all`)
  }

  saveVehiculo(vehiculo: Vehiculo): Observable<Vehiculo>{
    return this.http.post<Vehiculo>(`${this.url}/save`, vehiculo);
  }

  deleteVehiculo(id: number){
    return this.http.delete(`${this.url}/${id}/delete`)
  }

  updateVehiculo(vehiculo: Vehiculo, id: number):Observable<Vehiculo>{
    return this.http.put<Vehiculo>(`${this.url}/${id}/update`, vehiculo);
  }

  getVehiculoByPlacaVehiculo(placaVehiculo: string): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.url}/by/${placaVehiculo}`);
  }

  getVehiculoByLogistica(idLogistica: number): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.url}/byLogistica/${idLogistica}`);
  }

}
