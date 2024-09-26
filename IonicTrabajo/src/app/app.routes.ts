import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'reg-materia',
    loadComponent: () => import('./reg-materia/reg-materia.page').then( m => m.RegMateriaPage)
  },
  {
    path: 'reg-notas/:codigo',
    loadComponent: () => import('./reg-notas/reg-notas.page').then( m => m.RegNotasPage)
  },
];
