import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  url = 'http://localhost:8080/api/alimentos/'

  constructor(private http: HttpClient) { }

  obtenerAlimentos(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
