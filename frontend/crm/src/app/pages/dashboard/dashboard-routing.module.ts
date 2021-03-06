import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'atenciones',
        loadChildren: () => import('./../atenciones/atenciones.module').then(m => m.AtencionesModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('./../clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: 'cli-prospectos',
        loadChildren: () => import('./../cli-prospectos/cli-prospectos.module').then(m => m.CliProspectosModule)
      },
      {
        path: 'eventos',
        loadChildren: () => import('./../eventos/eventos.module').then(m => m.EventosModule)
      },
      {
        path: 'otecnicas',
        loadChildren: () => import('./../otecnicas/otecnicas.module').then(m => m.OtecnicasModule)
      },
      {
        path: 'reportes',
        loadChildren: () => import('./../reportes/reportes.module').then(m => m.ReportesModule)
      },
      {
        path: 'suministros',
        loadChildren: () => import('./../suministros/suministros.module').then(m => m.SuministrosModule)
      },
      {
        path: 'template',
        loadChildren: () => import('./../template/template.module').then(m => m.TemplateModule)
      },
      {
        path: 'tickets',
        loadChildren: () => import('./../tickets/tickets.module').then(m => m.TicketsModule)
      },
      {
        path: 'mttocartas',
        loadChildren: () => import('./../mtto-cartas/mtto-cartas.module').then(m => m.MttoCartasModule)
      },
      {
        path: 'motivoatn',
        loadChildren: () => import('./../motivo-atenciones/motivo-atenciones.module').then(m => m.MotivoAtencionesModule)
      },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
