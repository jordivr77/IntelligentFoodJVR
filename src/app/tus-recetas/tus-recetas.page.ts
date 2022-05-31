import { Component, OnInit } from '@angular/core';
import { Receta } from '../modelos/receta.interface';
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

  constructor(public tusRecetasService: TusRecetasService) { }

  ngOnInit() {

    this.tusRecetasService.obtenerRecetas()
    .subscribe(data => {
      console.log(data);
      this.recetas = data;
    })
  }

}
