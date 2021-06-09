import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedidos } from '../models/Pedidos';

@Injectable({
  providedIn: 'root'
})

export class InventarioService {
    API_URI = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {}

    GenerarMovmiento(pedido: Pedidos) {
        return this.http.post(`${this.API_URI}/inventario/new_order`, pedido);
    }

    BusquedadRangos(rangos) {
        return this.http.post(`${this.API_URI}/inventario/range_find`, rangos);
    }


}
 