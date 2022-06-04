import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alimento } from '../modelos/alimento.interface';
import { Categoria } from '../modelos/categoria.interface';
import { AgregarAlimentoService } from '../servicios/agregar-alimento.service';
import { ConsumicionDiaService } from '../servicios/consumicion-dia.service';
import { ConsumicionDia } from '../modelos/consumicionDia.interface';
import { DiaService } from '../servicios/dia.service';
import { element } from 'protractor';

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

  gramosAlimentos: { alimento: Alimento, gramos: number }[] = [];


  /**
   * En constructor se llama al servicio de agregar-alimento
   */
  constructor(
    public agregarAlimentoService: AgregarAlimentoService,
    public consumicionDiaService: ConsumicionDiaService,
    public diaService: DiaService,
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

  consumirAlimento(alimento: Alimento, gramos_alimento: number) {
    let consumiciondia = new ConsumicionDia();
    consumiciondia.alimento = alimento;
    consumiciondia.gramos_alimento = 100;
    if (this.gramosAlimentos) {
      let index = this.gramosAlimentos.findIndex((element) => element.alimento.id == alimento.id);
      if (index != -1) {
        let gramosAlimento = this.gramosAlimentos[index];
        consumiciondia.gramos_alimento = gramosAlimento.gramos;
      }
    }
    this.diaService.obtenerHoy(1).subscribe(data => {
      consumiciondia.dia = data;
      this.consumicionDiaService.crearConsumicionDia(consumiciondia).toPromise();
    });
  }

  actualizarGramosAlimento(event: Event, alimento: Alimento): void {
    let index = this.gramosAlimentos.findIndex((element) => element.alimento.id == alimento.id);
    let gramos: number = Number((event.target as HTMLInputElement).value);
    console.log(gramos);
    if (index != -1) {
      let gramosAlimento = this.gramosAlimentos[index];
      gramosAlimento.gramos = gramos;
    } else {

      this.gramosAlimentos.push({ alimento, gramos });
    }
  }

}
