import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentosPageRoutingModule } from './alimentos-routing.module';

import { AlimentosPage } from './alimentos.page';

import { AlimentoService } from '../servicios/alimento.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentosPageRoutingModule
  ],
  declarations: [AlimentosPage],
  providers : [
    AlimentoService
  ]
})
export class AlimentosPageModule {}
