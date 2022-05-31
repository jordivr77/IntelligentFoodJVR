import { Component, OnInit } from '@angular/core';
import { Alimento } from '../modelos/alimento.interface';
import { Categoria } from '../modelos/categoria.interface';
import { AlimentoService } from '../servicios/alimento.service';
import { CategoriaService } from '../servicios/categoria.service';
import { TusRecetasService } from '../servicios/tus-recetas.service';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.page.html',
  styleUrls: ['./alimentos.page.scss'],
})
export class AlimentosPage implements OnInit {

  /**
   * Crear array vacío de categorias
   */
  categorias: Categoria[] = [];

  /**
   * Crear array vacío de alimentos
   */
  alimentos: Alimento[] = [];

  foods: any = [];
  searchedFood: any;

  /**
   * 
   * @param alimentoService En el constructor se llama al servicio de alimentos y categorías
   * @param categoriaService 
   */
  constructor(public alimentoService: AlimentoService, 
    public categoriaService: CategoriaService,
    public tusRecetasService: TusRecetasService) { }

  /**
   * Codificamos la carga de los datos
   * Función que se carga en primera instancia al cargarse una página
   */
  ngOnInit() {
    
    this.searchedFood = this.foods;

    
    this.categoriaService.obtenerCategorias()
    .subscribe(data => {
      console.log(data);
      this.categorias = data;
    })

    this.alimentoService.obtenerAlimentos()
    .subscribe(data => {
      console.log(data);
      this.alimentos = data;
    })
  }

  agregarAlimento(){

  }


  searchFood(event: any) {
    const text = event.target.value;
    this.searchedFood = this.foods;
    if (text && text.trim() != '') {
      this.searchedFood = this.searchedFood.filter((food: any) => {
        return (food.name.toLowerCase().indexOf(text.toLowerCase()) > -1);
      })
    }
  }

}
