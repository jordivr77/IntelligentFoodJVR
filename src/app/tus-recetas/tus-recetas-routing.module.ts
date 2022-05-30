import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TusRecetasPage } from './tus-recetas.page';

const routes: Routes = [
  {
    path: '',
    component: TusRecetasPage
  },  {
    path: 'nueva-receta',
    loadChildren: () => import('./nueva-receta/nueva-receta.module').then( m => m.NuevaRecetaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TusRecetasPageRoutingModule {}
