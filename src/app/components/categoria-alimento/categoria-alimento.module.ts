import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaAlimentoPageRoutingModule } from './categoria-alimento-routing.module';

import { CategoriaAlimentoPage } from './categoria-alimento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaAlimentoPageRoutingModule
  ],
  declarations: [CategoriaAlimentoPage]
})
export class CategoriaAlimentoPageModule {}
