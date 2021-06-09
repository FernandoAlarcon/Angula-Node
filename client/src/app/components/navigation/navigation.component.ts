import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { Clientes } from 'src/app/models/Clientes';

import { ClientesComponent } from '../clientes/clientes.component';


@Component({
  providers:[ClientesComponent],
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
 
  cliente: Clientes = {
    id:'',
    nombre:'',
    documento:'',
    telefono:'',
    direccion:'',
    email:'',
    estado:''
  };
 
  busquedad = '';


  constructor(private ClientFunction: ClientesComponent,
              private clientesService: ClientesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}

  NuevosClientes(): void {

    delete this.cliente.id;
    this.clientesService.saveClientes(this.cliente)
    .subscribe(
      res => {

        //$('#NuevoCliente').modal('hide');
        this.ClientFunction.ListClientes();
        this.cliente.id        = '';
        this.cliente.nombre    = '';
        this.cliente.documento = '';
        this.cliente.direccion = '';
        this.cliente.telefono  = '';
        this.cliente.email     = '';
        this.cliente.estado    = '';
        //this.router.navigate(['/clientes']);
      },
      err => console.log(err)
    );
  }

}
