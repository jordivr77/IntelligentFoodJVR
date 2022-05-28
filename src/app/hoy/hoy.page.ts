import { Component, OnInit } from '@angular/core';
import { Dia } from '../modelos/dia.interface';
import { DiaService } from '../servicios/dia.service';

@Component({
  selector: 'app-hoy',
  templateUrl: './hoy.page.html',
  styleUrls: ['./hoy.page.scss'],
})
export class HoyPage implements OnInit {

  hoy: Dia;

  caloriasHoy: number = 0;

  constructor(public diaService: DiaService) { }

  ngOnInit() {
    this.diaService.obtenerHoy(1).subscribe(data => {
      this.hoy = data;
      if (this.hoy) {
        if (this.hoy.consumiciones_dia) {
          this.hoy.consumiciones_dia.forEach(consumicion => {
            if (consumicion.alimento) {
              this.caloriasHoy = this.caloriasHoy + (consumicion.alimento.kcalorias/100) * consumicion.gramos_aliento;
            }
          });
        }
      } else {
        this.diaService.crearNuevoDia(1).subscribe(data => {
          this.diaService.obtenerHoy(1).subscribe(data =>{ 
            this.hoy = data;
          });
        });
      }
    });
  }
}
