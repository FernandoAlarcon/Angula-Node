import { Title } from "@angular/platform-browser";

export interface Pedidos {
  usuario?: string,
  tipo_movimiento?: string,
  juego?: string,
  cantidad_juegos?:string,
  valor?: string,
  Fechas_entrada?: Date,
  Fecha_salida?: Date,
  Estado?:string,
  created_at?: Date
};
 
