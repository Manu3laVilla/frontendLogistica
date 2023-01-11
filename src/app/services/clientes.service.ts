import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private url = 'https://spring-logistica-back.herokuapp.com/logistica/clientes';

constructor(private http: HttpClient) { }

getClients(): Observable<Cliente[]>{
  return this.http.get<Cliente[]>(`${this.url}/all`)
}

saveClient(cliente: Cliente): Observable<Cliente>{
  return this.http.post<Cliente>(`${this.url}/save`, cliente);
}

deleteClient(id: number){
  return this.http.delete(`${this.url}/${id}/delete`)
}

updateClient(cliente: Cliente, id: number):Observable<Cliente>{
  return this.http.put<Cliente>(`${this.url}/${id}/update`, cliente);
}

getUserByIdentification(identificacion: number): Observable<Cliente[]>{
  return this.http.get<Cliente[]>(`${this.url}/by/${identificacion}`);
}
}
