import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  /**
   * Url base del microservicio de categorias desde Spring Boot
   */
  url = 'http://localhost:8080/api/categorias/'

  /**
   * Constructor que inicializa el sevicio
   * @param http 
   */
  constructor(public http: HttpClient) { }

/**
 * Función que permite consumir el servicio para consultar categorías
 * @returns 
 */
  obtenerCategorias(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
