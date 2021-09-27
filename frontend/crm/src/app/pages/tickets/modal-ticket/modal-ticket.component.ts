import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Eventos } from 'src/app/models/eventos';
import { Tickets } from 'src/app/models/tickets';
import { Usuario } from 'src/app/models/usuario';
import { TicketsService } from 'src/app/services/tickets.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-modal-ticket',
  templateUrl: './modal-ticket.component.html',
  styleUrls: ['./modal-ticket.component.css']
})
export class ModalTicketComponent implements OnInit {
  datos_evento: Eventos = new Eventos();
  user: Usuario = new Usuario();
  form_ticket : FormGroup;
  usuario_listado : Usuario[] = [];
  usuario_listado_notificar : Usuario[] = [];
  selectedData!: { value: any; text: string; };
  ticket_id : any;

  constructor(public modal_ticket: MatDialogRef<ModalTicketComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  private userService: UsuarioService, private ticketService: TicketsService, private _snackBar: MatSnackBar) {
    this.form_ticket = new FormGroup({
      //'codigo': new FormControl(''),
      'id_evento': new FormControl(''),
      'titulo_tck': new FormControl(''),
      'asignado_tck': new FormControl(''),
      'copia_tck': new FormControl(''),
      'fecha_resolucion': new FormControl(''),
      'hora_resolucion': new FormControl(''),
      'descripcion_tck': new FormControl(''),
      'usuario_crm': new FormControl(''),
      'trabajo_solicitado': new FormControl(''),
      'fecha_resolucion_orden': new FormControl(''),
      'hora_resolucion_orden': new FormControl(''),
      'direccion_orden': new FormControl(''),
      'contacto_orden': new FormControl(''),
      'tel_contacto_orden': new FormControl(''),
      'unidad_solicita' : new FormControl(''),
      'gerencia_solicita' : new FormControl(''),
      'adjud_contratista' : new FormControl(''),
      'observaciones_or' : new FormControl(''),

    });
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("usuario_crm") || '{}');
    this.datos_evento = this.data.datos_evento;

    this.userService.getUsuarios().subscribe(
      data =>{
        this.usuario_listado = data;
      }
    )
  }


  deleteUserNotificar(index: any){

    this.usuario_listado_notificar.splice(index, 1);
  }

  addUserNotificar(){
    let datos : Usuario = new Usuario();

    datos.id = this.selectedData?.value;
    datos.nombre = this.selectedData?.text;

    this.usuario_listado_notificar.push(datos);

  }


  getSelectText(event: MatSelectChange) {
    this.selectedData = {
      value: event.value,
      text: event.source.triggerValue
    };

  }

  guardarTicket(){
    let datos: Tickets = new Tickets();
    datos = this.form_ticket.value;

    this.ticketService.guardarTicket(datos).subscribe(
      response => {
        this.ticket_id = response;

      },
      err => {

      },
      () => {
        this._snackBar.open('¡¡ Ticket Guardado !!', 'Ok', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      });
      this.modal_ticket.close();


  }


  guardarTicketOrder(){
    let datos: Tickets = new Tickets();
    datos = this.form_ticket.value;

    this.ticketService.guardarTicket(datos).subscribe(
      response => {
        this.ticket_id = response;

      },
      err => {

      },
      () => {

        let datos_orden : Tickets = new Tickets();
        datos = this.form_ticket.value;
        datos.id = this.ticket_id;

        this.ticketService.guardarTicketOrder(datos).subscribe(
          response => {


          },
          err => {

          },
          () => {
            this._snackBar.open('¡¡ Ticket y orden de trabajo guardados !!', 'Ok', {
              duration: 3000,
              horizontalPosition: 'center',
              verticalPosition: 'top'
            });
          });



      });
      //this.modal_ticket.close();
  }
}
