import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Clientes } from '../models/Clientes';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getClientes(text: string) {
    return this.http.post(`${this.API_URI}/clientes/Lista`, text);
  }

  getCliente(id: string) {
    return this.http.get(`${this.API_URI}/clientes/${id}`);
  }

  deleteClientes(id: string) {
    return this.http.delete(`${this.API_URI}/clientes/${id}`);
  }

  saveClientes(clientes: Clientes): Observable<Clientes> {
    return this.http.post(`${this.API_URI}/clientes`, clientes);
  }

  updateClientes(id: string|number, updatedClientes: Clientes): Observable<Clientes> {
    return this.http.put(`${this.API_URI}/clientes/${id}`, updatedClientes);
  }

}
