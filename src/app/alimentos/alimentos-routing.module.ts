import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentosPage } from './alimentos.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentosPage
  },
  {
    path: 'agregar-alimento',
    loadChildren: () => import('./agregar-alimento/agregar-alimento.module').then( m => m.AgregarAlimentoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentosPageRoutingModule {}
