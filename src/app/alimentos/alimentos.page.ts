import { Component, OnInit } from '@angular/core';
import { Categoria } from '../modelos/categoria.interface';
import { AlimentoService } from '../servicios/alimento.service';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.page.html',
  styleUrls: ['./alimentos.page.scss'],
})
export class AlimentosPage implements OnInit {

  categorias: Categoria[] = [];

  // Crear array vacío de alimentos
  alimentos: any = [];

  foods: any = [];
  searchedFood: any;

  // En el ctor se llama al SERVICIO
  constructor(public alimentoService: AlimentoService) { }

  // Codificamos la carga de los datos 
  // Función que se carga en primera instancia al cargarse una pág.
  ngOnInit() {
    this.getCategorias();
    this.searchedFood = this.foods;

    this.alimentoService.obtenerAlimentos()
    .subscribe(data => {
      console.log(data);
      this.alimentos = data
    })
  }

  agregarAlimento(){

  }

  getCategorias() {
    this.categorias = [
      {
        id: 1,
        label: 'Todas',
        image: 'assets/icon/todas.jpg',
        active: true,
      },
      {
        id: 2,
        label: 'Aceites/Grasas Vegetales',
        image: 'assets/icon/aceites-vegetales-grasas-animales.jpg',
        active: false,
      },
      {
        id: 3,
        label: 'Dulces',
        image: 'assets/icon/todas.jpg',
        active: false,
      },
      {
        id: 4,
        label: 'Cremas',
        image: 'assets/icon/todas.jpg',
        active: false,
      },

    ];
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
