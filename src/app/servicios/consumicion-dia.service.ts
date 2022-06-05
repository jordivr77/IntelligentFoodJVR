import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumicionDia } from '../modelos/consumicionDia.interface';
import { Dia } from '../modelos/dia.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsumicionDiaService {

  urlConsumicionDia = 'http://localhost:8080//api/consumiciondias';
  urlConsumicionesHoy = 'http://localhost:8080//api/consumiciondia/hoy/';
  urlConsumicionesUsuario = "http://localhost:8080//api/consumicionesdia/usuario/"

  constructor(public http: HttpClient) { }

  crearConsumicionDia(consumiciondia: ConsumicionDia) : Observable<any> {
    return this.http.post<any>(this.urlConsumicionDia, consumiciondia);
  }

  obtenerConsumicionesHoy(hoy: Dia): Observable<any> {
    return this.http.get<any>(this.urlConsumicionesHoy + hoy.id);
  }

  obtenerConsumicionesUsuario(idUsuario: number): Observable<any> {
    return this.http.get<any>(this.urlConsumicionesUsuario + idUsuario);
  }

}
