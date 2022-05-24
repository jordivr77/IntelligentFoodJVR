import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaService {

  urlHoy = 'http://localhost:8080/api/dia/hoy/';
  urlNuevoDia = 'http://localhost:8080/api/dia/nuevo/';


  constructor(public http: HttpClient) { }

  obtenerHoy(idUsuario: number): Observable<any> {
    return this.http.get<any>(this.urlHoy + idUsuario);
  }

  crearNuevoDia(idUsuario: number): Observable<any> {
    return this.http.post<any>(this.urlNuevoDia + idUsuario, idUsuario);
  }
}
