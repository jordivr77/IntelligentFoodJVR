import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alimento } from 'src/app/modelos/alimento.interface';
import { Categoria } from 'src/app/modelos/categoria.interface';
import { Receta } from 'src/app/modelos/receta.interface';
import { AlimentoService } from 'src/app/servicios/alimento.service';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { TusRecetasService } from 'src/app/servicios/tus-recetas.service';

@Component({
  selector: 'app-nueva-receta',
  templateUrl: './nueva-receta.page.html',
  styleUrls: ['./nueva-receta.page.scss'],
})
export class NuevaRecetaPage implements OnInit {

  receta: Receta;

  alimentos: Alimento[];

  categorias: Categoria[];

  alimentosFiltrados: Alimento[];

  constructor(public router: Router,public tusRecetasService: TusRecetasService, public alimentoService: AlimentoService, public categoriaService: CategoriaService) { }

  ngOnInit() {
    this.receta = new Receta();
    this.alimentosFiltrados = [];
    this.alimentoService.obtenerAlimentos().subscribe(data => this.alimentos = data);
    this.categoriaService.obtenerCategorias().subscribe(data => this.categorias = data);
  }

  //busca los alimentos por su nombre en el array alimentos y los mete en alimentosFiltrados
  buscarAlimento() {
    this.alimentosFiltrados.splice(0,this.alimentosFiltrados.length);
    let nombreAlimento = (document.getElementById('alimentoBuscar') as HTMLInputElement).value;
    this.alimentos.forEach(alimento => {
      if (alimento.nombre.toLowerCase().includes(nombreAlimento.toLowerCase())) {
        this.alimentosFiltrados.push(alimento);
      }
    })
  }

  //añade un alimento al array de alimentos de la receta
  nuevoIngrediente(alimento: Alimento) {
    if (!this.receta.alimentos.includes(alimento)) {
      this.receta.alimentos.push(alimento);
    }
  }

  //quita un alimento del array de alimentos de la receta
  borrarIngrediente(alimento: Alimento) {
    let posicion = this.receta.alimentos.indexOf(alimento);
    this.receta.alimentos.splice(posicion);
  }

  //saca todos los datos de los input del formulario y los mete en los campos de la receta.
  //en caso de faltar alguno por rellenar mostrará un mensaje en el formulario indicandolo.
  //si se han rellenado todos los campos, la receta se embiará al servicio para añadirla a la base de datos.
  guardarReceta() {
    this.receta.nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    this.receta.preparacion = (document.getElementById('preparacion') as HTMLInputElement).value;
    let idCategoria  = (document.getElementById('categoria') as HTMLSelectElement).value;
    let posicionCategoria = this.categorias.findIndex((categoria) => categoria.id == Number(idCategoria));
    this.receta.categoria = this.categorias[posicionCategoria];
    this.receta.kcalorias = Number((document.getElementById('calorias') as HTMLInputElement).value);
    if (this.receta.nombre == '' || this.receta.preparacion == '' || this.receta.kcalorias == 0 || this.receta.categoria == null || this.receta.alimentos.length == 0) {
      document.getElementById('faltanDatos').textContent = 'Faltan datos por rellenar';
    } else {
      this.tusRecetasService.nuevaReceta(this.receta,1).toPromise();
      this.router.navigate(['/hoy']);
    }
  }

}
