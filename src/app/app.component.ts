import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home', icon: 'storefront' },
    { title: 'Hoy', url: 'hoy', icon: 'bag-add' },
    { title: 'Calendario', url: 'calendario', icon: 'calendar-number' },
    { title: 'Tus Recetas', url: 'tus-recetas', icon: 'receipt' },
    { title: 'Alimentos', url: 'alimentos', icon: 'nutrition' }
  ];
  constructor() {}
}
