// Añadiremos los nuevos módulos que se vayan usando

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AgregarAlimentoPageModule } from './agregar-alimento/agregar-alimento.module';
import { AlimentosPageModule } from './alimentos/alimentos.module';
import { CalendarioPageModule } from './calendario/calendario.module';
import { HomePageModule } from './home/home.module';
import { HoyPageModule } from './hoy/hoy.module';
import { TusRecetasPageModule } from './tus-recetas/tus-recetas.module';

import { AlimentoService } from './servicios/alimento.service';
import { CategoriaService } from './servicios/categoria.service';
import { AgregarAlimentoService } from './servicios/agregar-alimento.service';
import { DiaService } from './servicios/dia.service';
import { TusRecetasService } from './servicios/tus-recetas.service';
import { ConsumicionDiaService } from './servicios/consumicion-dia.service';
import { NuevaRecetaPageModule } from './tus-recetas/nueva-receta/nueva-receta.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    AlimentosPageModule,
    CalendarioPageModule,
    AgregarAlimentoPageModule,
    HomePageModule,
    HoyPageModule,
    TusRecetasPageModule,
    NuevaRecetaPageModule

  ], 
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AlimentoService,
    CategoriaService,
    AgregarAlimentoService,
    DiaService,
    TusRecetasService,
    ConsumicionDiaService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
