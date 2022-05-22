import { Component, OnInit } from '@angular/core';
import { Alimento } from '../modelos/alimento.interface';
import { Categoria } from '../modelos/categoria.interface';
import { AgregarAlimentoService } from '../servicios/agregar-alimento.service';

@Component({
  selector: 'app-agregar-alimento',
  templateUrl: './agregar-alimento.page.html',
  styleUrls: ['./agregar-alimento.page.scss'],
})
export class AgregarAlimentoPage implements OnInit {

  /**
   * Crear array vacío de categorías
   */
  categorias: Categoria[];

  /**
   * Crear array vacío de alimentos
   */
  alimentos: Alimento[];

  /**
   * En constructor se llama al servicio de agregar-alimento
   */
  constructor(public agregarAlimentoService: AgregarAlimentoService) { }

  /**
   * Codificamos la carga de los datos
   * Función que se carga en primera instancia al cargarse la página
   */
  ngOnInit() {

    this.agregarAlimentoService.obtenerAlimentos()
    .subscribe(data => {
      console.log(data);
      this.alimentos = data;
    })
  }

}
