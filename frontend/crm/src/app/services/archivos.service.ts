import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Archivos } from '../models/archivos';
import { GlobalService } from './global.service';
import { Router } from '@angular/router';
import {Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })

};

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  constructor(private http: HttpClient, private router: Router, private globalservice: GlobalService) { }

  public mover_archivo(archivo: any): Observable<Archivos> {
    return this.http.post<Archivos>(this.globalservice.getUrlBackEnd() + 'mover_archivo', archivo, httpOptions)
    .pipe(map(data => data as Archivos ));
  }

  public eliminar_archivo(archivo: Archivos): Observable<Archivos> {
    return this.http.post<Archivos>(this.globalservice.getUrlBackEnd() + 'eliminar_archivo', archivo, httpOptions)
    .pipe(map(data => data as Archivos ));
  }


  public guardarArchivosAtn(archivo: Archivos[]): Observable<Archivos[]> {
    return this.http.post<Archivos[]>(this.globalservice.getUrlBackEnd() + 'guardarArchivosAtn', archivo, httpOptions)
    .pipe(map(data => data as Archivos[] ));
  }


  public guardarArchivosEvt(archivo: Archivos[]): Observable<Archivos[]> {
    return this.http.post<Archivos[]>(this.globalservice.getUrlBackEnd() + 'guardarArchivosEvt', archivo, httpOptions)
    .pipe(map(data => data as Archivos[] ));
  }


  public getAdjuntosAtencion(id_atn: Archivos): Observable<Archivos[]> {
    return this.http.post<Archivos>(this.globalservice.getUrlBackEnd() + 'getAdjuntosAtencion', id_atn, httpOptions)
    .pipe(map(data => data as unknown as Archivos[] ));
  }
  public getAdjuntosEventos(id_atn: Archivos): Observable<Archivos[]> {
    return this.http.post<Archivos>(this.globalservice.getUrlBackEnd() + 'getAdjuntosEventos', id_atn, httpOptions)
    .pipe(map(data => data as unknown as Archivos[] ));
  }





}
