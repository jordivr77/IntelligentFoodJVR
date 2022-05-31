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
  url = 'http://localhost:8080/api/alimentos/'

  urlRecetas = 'http://localhost:8080/api/recetas'

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

  /**
   * Función que nos permite consumir el servicio para consultar las recetas
   */
  obtenerRecetas(): Observable<any> {
    return this.http.get<any>(this.urlRecetas)
  }

}
