import { Component, OnInit } from '@angular/core';
import { Dia } from '../modelos/dia.interface';
import { DiaService } from '../servicios/dia.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  dias: Dia[];

  constructor(public diaService: DiaService) { }

  ngOnInit() {
    this.diaService.obtenerDiasCalendario(1).subscribe(data =>{
      this.dias = data;
    })
  }

  caloriasDia(dia: Dia): number {
    let total: number;
        if (dia.consumiciones_dia) {
            dia.consumiciones_dia.forEach(consumicion => {
                if (consumicion.alimento) {
                    total = total + (consumicion.alimento.kcalorias/100) * consumicion.gramos_aliento;
                } else {
                    total = total + (consumicion.receta.kcalorias/100) * consumicion.gramos_receta;
                }
            });
        } else {
            total = 0;
        }
        return total;
  }

}
