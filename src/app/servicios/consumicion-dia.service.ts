import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsumicionDia } from '../modelos/consumicionDia.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsumicionDiaService {

  urlConsumicionDia = 'http://localhost:8080//api/consumiciondias'

  constructor(public http: HttpClient) { }

  crearConsumicionDia(consumiciondia: ConsumicionDia) : Observable<any> {
    console.log(consumiciondia);
    return this.http.post<any>(this.urlConsumicionDia, consumiciondia);
  }

}
