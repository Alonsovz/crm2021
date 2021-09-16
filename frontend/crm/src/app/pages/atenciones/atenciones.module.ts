import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtencionesRoutingModule } from './atenciones-routing.module';
import { AtencionesComponent } from './atenciones/atenciones.component';
import { MatModuleModule } from 'src/app/mat-module.module';
import { ModalAtencionComponent } from './modal-atencion/modal-atencion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubirArchivosComponent } from './subir-archivos/subir-archivos.component';


@NgModule({
  declarations: [
    AtencionesComponent,
    ModalAtencionComponent,
    SubirArchivosComponent
  ],
  imports: [
    CommonModule,
    AtencionesRoutingModule,
    MatModuleModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ModalAtencionComponent,
    SubirArchivosComponent
  ]
})
export class AtencionesModule { }