import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TusRecetasService {

  urlRecetas = 'http://localhost:8080/api/recetas'


  constructor(public http: HttpClient) { }
  
  obtenerRecetas(): Observable<any> {
    return this.http.get<any>(this.urlRecetas)
  }
}
