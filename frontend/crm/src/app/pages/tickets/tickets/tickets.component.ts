import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { GlobalService } from 'src/app/services/global.service';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  user: Usuario = new Usuario();
  texto:any;
  displayedColumns: string[] = ['idAte',  'evento_id', 'id' , 'nombreasignado', 'nombresoli','descripcion','fecha_creacionD', 'estado', 'Acciones'];
  dataSource_tckTodos:any = new MatTableDataSource<any>([]);
  dataSource_tckGenerados:any = new MatTableDataSource<any>([]);
  dataSource_tckProResolucion:any = new MatTableDataSource<any>([]);
  dataSource_tckSolucionados:any = new MatTableDataSource<any>([]);
  dataSource_tckRechazados:any = new MatTableDataSource<any>([]);
  dataSource_tckCerrados:any = new MatTableDataSource<any>([]);

  @ViewChild('paginator1') paginator1: MatPaginator | undefined;
  @ViewChild('paginator2') paginator2: MatPaginator | undefined;
  @ViewChild('paginator3') paginator3: MatPaginator | undefined;
  @ViewChild('paginator4') paginator4: MatPaginator | undefined;
  @ViewChild('paginator5') paginator5: MatPaginator | undefined;
  @ViewChild('paginator6') paginator6: MatPaginator | undefined;

  constructor(private global: GlobalService, private router: Router, private ticketService: TicketsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.global.fillOpcionMenu('Tickets CRM');
    });

    if(localStorage.getItem('usuario_crm') !== null){

      this.user = JSON.parse(localStorage.getItem("usuario_crm") || '{}');
      setTimeout(() => {
        this.global.fillOpcionMenu('Tickets');
      });

    }else{
      this.router.navigate(['login']);
    }

  }



  ngAfterViewInit() {


    this.dataSource_tckTodos.paginator = this.paginator1;
    this.dataSource_tckGenerados.paginator = this.paginator2;
    this.dataSource_tckProResolucion.paginator = this.paginator3;
    this.dataSource_tckSolucionados.paginator = this.paginator4;
    this.dataSource_tckRechazados.paginator = this.paginator5;
    this.dataSource_tckCerrados.paginator = this.paginator6;
    this.getAllTickets();
  }

  getAllTickets(){
    this.ticketService.getAllTickets(this.user).subscribe(
      data => {

        //llenando arreglos
        this.dataSource_tckTodos.data = data;

        data.forEach((element: any) => {
          if(element["estado"]==='Recibido'){
            this.dataSource_tckGenerados.data.push(element);
          }
        });

        data.forEach((element: any) => {
          if(element["estado"]==='En proceso'){
            this.dataSource_tckProResolucion.data.push(element);
          }
        });

        data.forEach((element: any) => {
          if(element["estado"]==='Solucionado'){
            this.dataSource_tckSolucionados.data.push(element);
          }
        });

        data.forEach((element: any) => {
          if(element["estado"]==='Rechazado'){
            this.dataSource_tckRechazados.data.push(element);
          }
        });

        data.forEach((element: any) => {
          if(element["estado"]==='Cerrado'){
            this.dataSource_tckCerrados.data.push(element);
          }
        });

        //llenando behaviour subject
        this.ticketService.filltckTodos_list(this.dataSource_tckTodos.data);
        this.ticketService.filltckGenerados_list(this.dataSource_tckGenerados.data);
        this.ticketService.filltckProResolucion_list(this.dataSource_tckProResolucion.data);
        this.ticketService.filltckSolucionados_list(this.dataSource_tckSolucionados.data);
        this.ticketService.filltckRechazados_list(this.dataSource_tckRechazados.data);
        this.ticketService.filltckCerrados_list(this.dataSource_tckCerrados.data);


        //suscribiendose a arreglo para llenar tabla
        this.ticketService._datos_tckTodos.subscribe(response => {
          this.dataSource_tckTodos.data = response;
        });

        this.ticketService._datos_tckGenerados.subscribe(response => {
          this.dataSource_tckGenerados.data = response;
        });

        this.ticketService._datos_tckProResolucion.subscribe(response => {
          this.dataSource_tckProResolucion.data = response;
        });

        this.ticketService._datos_tckSolucionados.subscribe(response => {
          this.dataSource_tckSolucionados.data = response;
        });

        this.ticketService._datos_tckRechazados.subscribe(response => {
          this.dataSource_tckRechazados.data = response;
        });

        this.ticketService._datos_tckCerrados.subscribe(response => {
          this.dataSource_tckCerrados.data = response;
        });
      });
  }

  filterTable_tckTodos (filterValue :string) {
    this.dataSource_tckTodos.filter = filterValue.trim().toLowerCase();
 }

 filterTable_tckGenerados (filterValue :string) {
  this.dataSource_tckGenerados.filter = filterValue.trim().toLowerCase();
}

filterTable_tckProResolucion(filterValue :string) {
  this.dataSource_tckProResolucion.filter = filterValue.trim().toLowerCase();
}

filterTable_tckSolucionados(filterValue :string) {
  this.dataSource_tckSolucionados.filter = filterValue.trim().toLowerCase();
}

filterTable_tckRechazados(filterValue :string) {
  this.dataSource_tckRechazados.filter = filterValue.trim().toLowerCase();
}

filterTable_tckCerrados(filterValue :string) {
  this.dataSource_tckCerrados.filter = filterValue.trim().toLowerCase();
}

}
