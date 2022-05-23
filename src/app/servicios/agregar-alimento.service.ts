import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgregarAlimentoService {

  /**
   * Url base del microservicio de categorias desde Spring boot
   */
  url = 'http://localhost:8080/api/alimentos/categorias/'

  /**
   * Constructor que inicializa el servicio
   */
  constructor(public http: HttpClient) { }

  /**
   * Función que permite consumir el servicio para consultar alimentos
   */

  obtenerAlimentos(idCategoria: number) : Observable<any> {
    console.log(this.url);
    return this.http.get<any>(this.url + idCategoria);
  }
}
