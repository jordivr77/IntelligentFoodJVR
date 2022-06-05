import { Component, OnInit } from '@angular/core';
import { ConsumicionDia } from '../modelos/consumicionDia.interface';
import { Dia } from '../modelos/dia.interface';
import { ConsumicionDiaService } from '../servicios/consumicion-dia.service';
import { DiaService } from '../servicios/dia.service';

@Component({
  selector: 'app-hoy',
  templateUrl: './hoy.page.html',
  styleUrls: ['./hoy.page.scss'],
})
export class HoyPage implements OnInit {

  hoy: Dia;
  consumicionesHoy: ConsumicionDia[] = [];

  caloriasHoy: number = 0;

  constructor(
    public diaService: DiaService, public consumicionDiaService: ConsumicionDiaService
  ) { }

  ngOnInit() {
    this.diaService.obtenerHoy(1).subscribe(data => {
      this.hoy = data;
      if (this.hoy) {
        this.consumicionDiaService.obtenerConsumicionesHoy(this.hoy).subscribe(data => {
          this.consumicionesHoy = data;
          if (this.consumicionesHoy) {
            this.consumicionesHoy.forEach(consumicion => {
              if (consumicion.alimento) {
                this.caloriasHoy = this.caloriasHoy + (consumicion.alimento.kcalorias/100) * consumicion.gramos_alimento;
              } else {
                this.caloriasHoy = this.caloriasHoy + (consumicion.receta.kcalorias/100) * consumicion.gramos_receta;
              }
            });
          }
        });
      } else {
        this.diaService.crearNuevoDia(1).subscribe(data => {
          this.diaService.obtenerHoy(1).subscribe(data => {
            this.hoy = data;
          });
        });
      }
    });
  }
  
}
