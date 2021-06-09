import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClientesService } from 'src/app/services/clientes.service';
import { Clientes } from 'src/app/models/Clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  
  cliente: Clientes = {
    id:'',
    nombre:'',
    documento:'',
    telefono:'',
    direccion:'',
    email:'',
    estado:''
  };

  clientes: any = [];
  busquedad = '';


  constructor(private clientesService: ClientesService , private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.ListClientes();
  }

  DataChange(DataClient): void {
    this.cliente.id        = DataClient.id;
    this.cliente.nombre    = DataClient.nombre;
    this.cliente.documento = DataClient.documento;
    this.cliente.direccion = DataClient.direccion;
    this.cliente.telefono  = DataClient.telefono;
    this.cliente.email     = DataClient.email;
    this.cliente.estado    = DataClient.estado;
  }

  UpdateCliente(): void {
    this.clientesService.updateClientes(this.cliente.id, this.cliente).subscribe(
      res => {
        $('#EditarCliente').modal('hide');
        this.ListClientes();
        this.cliente.id        = '';
        this.cliente.nombre    = '';
        this.cliente.documento = '';
        this.cliente.direccion = '';
        this.cliente.telefono  = '';
        this.cliente.email     = '';
        this.cliente.estado    = '';
     }, (err) => console.error(err)
    );
  }

  DeleteClient(Client): void {
    if(confirm('Seguro que deseas eliminar')){
      this.clientesService.deleteClientes(Client.id)
      .subscribe(
        res => {
           this.ListClientes();
        }, (err) => console.error(err)
      );
    }
  }

  ListClientes(): void {
    this.clientesService.getClientes(this.busquedad)
    .subscribe(
      res => {
        this.clientes = res;
        console.log('Data ' + this.clientes );
      },
      (err) => console.error(err)
    );
  }
}
