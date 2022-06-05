import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receta } from '../modelos/receta.interface';

@Injectable({
  providedIn: 'root'
})
export class TusRecetasService {

  urlRecetas = 'http://localhost:8080/api/recetas';
  urlNuevaReceta = 'http://localhost:8080/api/recetas/';


  constructor(public http: HttpClient) { }
  
  obtenerRecetas(): Observable<any> {
    return this.http.get<any>(this.urlRecetas);
  }

  nuevaReceta(receta: Receta, idUsuario: number): Observable<any> {
    return this.http.post<any>(this.urlNuevaReceta + idUsuario, receta);
  }
}
