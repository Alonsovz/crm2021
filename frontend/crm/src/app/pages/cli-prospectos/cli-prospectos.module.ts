import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CliProspectosRoutingModule } from './cli-prospectos-routing.module';
import { CliProspectosComponent } from './cli-prospectos/cli-prospectos.component';
import { MatModuleModule } from 'src/app/mat-module.module';
import { AtencionesModule } from '../atenciones/atenciones.module';
import { EventosModule } from '../eventos/eventos.module';
import { TicketsModule } from '../tickets/tickets.module';
import { ClientesModule } from '../clientes/clientes.module';
import { DetallesComponent } from './detalles/detalles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoContactoComponent } from './nuevo-contacto/nuevo-contacto.component';
import { EditarContactoComponent } from './editar-contacto/editar-contacto.component';



@NgModule({
  declarations: [
    CliProspectosComponent,
    DetallesComponent,
    NuevoContactoComponent,
    EditarContactoComponent,
  ],
  imports: [
    CommonModule,
    CliProspectosRoutingModule,
    MatModuleModule,
    AtencionesModule,
    EventosModule,
    TicketsModule,
    ClientesModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    NuevoContactoComponent,
    EditarContactoComponent
  ]
})
export class CliProspectosModule { }
