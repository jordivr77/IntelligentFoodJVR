import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarAlimentoPageRoutingModule } from './agregar-alimento-routing.module';

import { AgregarAlimentoPage } from './agregar-alimento.page';
import { AgregarAlimentoService } from '../servicios/agregar-alimento.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarAlimentoPageRoutingModule
  ],
  declarations: [AgregarAlimentoPage],
  providers: [
    AgregarAlimentoService
  ]
})
export class AgregarAlimentoPageModule {}
