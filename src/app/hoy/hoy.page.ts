import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Dia } from '../modelos/dia.interface';
import { DiaService } from '../servicios/dia.service';

@Component({
  selector: 'app-hoy',
  templateUrl: './hoy.page.html',
  styleUrls: ['./hoy.page.scss'],
})
export class HoyPage implements OnInit {

  hoy: Dia;

  caloriasHoy: number = 0;

  id: any;
  kcalorias: any;


  constructor(
    public diaService: DiaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.diaService.obtenerHoy(1).subscribe(data => {
      this.hoy = data;
      if (this.hoy) {
        if (this.hoy.consumiciones_dia) {
          this.hoy.consumiciones_dia.forEach(consumicion => {
            if (consumicion.alimento) {
              this.caloriasHoy = this.caloriasHoy + (consumicion.alimento.kcalorias / 100) * consumicion.gramos_aliento;
            }
          });
        }
      } else {
        this.diaService.crearNuevoDia(1).subscribe(data => {
          this.diaService.obtenerHoy(1).subscribe(data => {
            this.hoy = data;
          });
        });
      }
    });

  
    this.id = this.activatedRoute.snapshot.paramMap.get("id")

    this.kcalorias = this.activatedRoute.snapshot.paramMap.get("kcalorias")
    console.log("id", this.id);
    console.log("kcalorias", this.kcalorias);
  }
}
