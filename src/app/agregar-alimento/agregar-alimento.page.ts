import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  idCategoria: any;

  idAlimento: any;

  /**
   * En constructor se llama al servicio de agregar-alimento
   */
  constructor(
    public agregarAlimentoService: AgregarAlimentoService, 
    private activatedRoute: ActivatedRoute
    ) { }

  /**
   * Codificamos la carga de los datos
   * Función que se carga en primera instancia al cargarse la página
   */
  ngOnInit() {

    this.idCategoria = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(this.idCategoria);

    this.agregarAlimentoService.obtenerAlimentos(this.idCategoria)
    .subscribe(data => {
      console.log(data);
      this.alimentos = data;
    })
  }

  /**
   * Método que aumenta la cantidad de gramos del alimento
   */


}
