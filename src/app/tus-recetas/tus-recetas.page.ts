import { Component, OnInit } from '@angular/core';
import { ConsumicionDia } from '../modelos/consumicionDia.interface';
import { Receta } from '../modelos/receta.interface';
import { ConsumicionDiaService } from '../servicios/consumicion-dia.service';
import { DiaService } from '../servicios/dia.service';
import { TusRecetasService } from '../servicios/tus-recetas.service';

@Component({
  selector: 'app-tus-recetas',
  templateUrl: './tus-recetas.page.html',
  styleUrls: ['./tus-recetas.page.scss'],
})
export class TusRecetasPage implements OnInit {

  /**
   * Crea array vacío de recetas
   */
  recetas: Receta[] = [];

  gramosRecetas: {receta:Receta,gramos:number}[] = [];

  constructor(public tusRecetasService: TusRecetasService, public diaService: DiaService, public consumicionDiaService: ConsumicionDiaService) { }

  ngOnInit() {

    this.tusRecetasService.obtenerRecetas()
    .subscribe(data => {
      this.recetas = data;
    })
  }

  //se crea una consumicion con la receta seleccionada y con sus respectivos gramos
  consumirReceta(receta: Receta){
    let consumiciondia = new ConsumicionDia();
    consumiciondia.receta = receta;
    consumiciondia.gramos_receta = 100;
    if (this.gramosRecetas) {
      let index = this.gramosRecetas.findIndex((element) => element.receta.id == receta.id);
      if (index != -1) {
        let gramosReceta = this.gramosRecetas[index];
        consumiciondia.gramos_receta = gramosReceta.gramos;
      } 
    } 
    this.diaService.obtenerHoy(1).subscribe(data => {
      consumiciondia.dia = data;
      this.consumicionDiaService.crearConsumicionDia(consumiciondia).toPromise();
    });
  }

  //añade la receta con sus respectivos gramos al array o actualiza los gramos en caso de ya existir la receta
  actualizarGramosReceta(event: Event,receta: Receta): void {
    let index = this.gramosRecetas.findIndex((element) => element.receta.id == receta.id);
    let gramos: number = Number((event.target as HTMLInputElement).value);
    if (index != -1) {
      let gramosReceta = this.gramosRecetas[index];
      gramosReceta.gramos = gramos;
    } else {
      
      this.gramosRecetas.push({receta,gramos});
    }
  }

}
