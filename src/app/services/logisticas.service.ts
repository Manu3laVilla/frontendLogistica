import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Logistica } from '../interfaces/logistica';

@Injectable({
  providedIn: 'root'
})
export class LogisticasService {

  private url = 'https://spring-logistica-back.herokuapp.com/logistica/tipos';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Logistica[]>{
    return this.http.get<Logistica[]>(`${this.url}/all`)
  }

  getLogisticaByLogistica(idLogistica:number): Observable<Logistica[]>{
    return this.http.get<Logistica[]>(`${this.url}/by/${idLogistica}`);
  }
}
