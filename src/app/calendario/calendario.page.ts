import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ConsumicionDia } from '../modelos/consumicionDia.interface';
import { Dia } from '../modelos/dia.interface';
import { ConsumicionDiaService } from '../servicios/consumicion-dia.service';
import { DiaService } from '../servicios/dia.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  dias: Dia[];

  consumiciones: ConsumicionDia[];

  constructor(public diaService: DiaService, public consumicionService: ConsumicionDiaService) { }

  ngOnInit() {
    this.diaService.obtenerDiasCalendario(1).subscribe(data =>{
      this.dias = data;
    })
    this.consumicionService.obtenerConsumicionesUsuario(1).subscribe(data => {
      this.consumiciones = data;
    })
  }

  caloriasDia(dia: Dia): number {
    let total: number = 0;
    if (this.consumiciones) {
        this.consumiciones.forEach(consumicion => {
          if (consumicion.dia.id == dia.id) {
            if (consumicion.alimento) {
                total = total + (consumicion.alimento.kcalorias/100) * consumicion.gramos_alimento;
            } else {
                total = total + (consumicion.receta.kcalorias/100) * consumicion.gramos_receta;
            }
          }
        });
    }
    return total;
  }

}
