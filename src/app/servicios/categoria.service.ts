import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = 'http://localhost:8080/api/categorias/'

  constructor(public http: HttpClient) { }

  obtenerCategorias(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
