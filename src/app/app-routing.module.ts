import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
    path: 'categoria-alimento',
    loadChildren: () => import('./components/categoria-alimento/categoria-alimento.module').then( m => m.CategoriaAlimentoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
