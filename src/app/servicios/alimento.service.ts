import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AlimentoService {

  /**
   * Url base del microservicio de alimentos de Spring boot
   */
  url = 'http://192.168.18.184:8080/api/alimentos/'

  /**
   * 
   * @param http Construcción que inicializa el servicio
   */
  constructor(public http: HttpClient) { }

  /**
   * 
   * @returns Función que permite consumir el servicio para consultar alimentos
   */
  obtenerAlimentos(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
