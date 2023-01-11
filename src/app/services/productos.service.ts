import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productInit = new Subject<Producto[]>;

  private url = 'https://spring-logistica-back.herokuapp.com/logistica/productos';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.url}/all`)
  }

  saveProduct(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(`${this.url}/save`, producto);
  }

  deleteProduct(id: number){
    return this.http.delete(`${this.url}/${id}/delete`)
  }

  updateProduct(producto: Producto, id: number):Observable<Producto>{
    return this.http.put<Producto>(`${this.url}/${id}/update`, producto);
  }

  getProductByNameProduct(nameProduct:string): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.url}/by/${nameProduct}`);
  }

  getProductByLogistica(idLogistica:number): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.url}/byLogistica/${idLogistica}`);
  }
}
