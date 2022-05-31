import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'hoy',
    loadChildren: () => import('./hoy/hoy.module').then( m => m.HoyPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'tus-recetas',
    loadChildren: () => import('./tus-recetas/tus-recetas.module').then( m => m.TusRecetasPageModule)
  },
  {
    path: 'alimentos',
    loadChildren: () => import('./alimentos/alimentos.module').then( m => m.AlimentosPageModule)
  },
  {
    path: 'nueva-receta',
    loadChildren: () => import('./tus-recetas/nueva-receta/nueva-receta.module').then( m => m.NuevaRecetaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
