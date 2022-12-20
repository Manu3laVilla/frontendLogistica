import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../interfaces/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private url = 'http://localhost:8080/logistica/pedidos';

  constructor(private http: HttpClient) { }

  getPedidos(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.url}/all`)
  }

  savePedidos(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(`${this.url}/save`, pedido);
  }

  deletePedido(id: number){
    return this.http.delete(`${this.url}/${id}/delete`)
  }

  updatePedidos(pedido: Pedido, id: number):Observable<Pedido>{
    return this.http.put<Pedido>(`${this.url}/${id}/update`, pedido);
  }
}
