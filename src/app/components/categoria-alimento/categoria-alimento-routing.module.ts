import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaAlimentoPage } from './categoria-alimento.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaAlimentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaAlimentoPageRoutingModule {}
