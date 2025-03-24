import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'MLBB GOGO - Beranda'
  },
  {
    path: 'commander',
    loadComponent: () => import('./pages/commander/commander.component').then(m => m.CommanderComponent),
    title: 'MLBB GOGO - Commander'
  },
  {
    path: 'hero',
    loadComponent: () => import('./pages/hero/hero.component').then(m => m.HeroComponent),
    title: 'MLBB GOGO - Hero'
  },
  {
    path: 'synergy',
    loadComponent: () => import('./pages/synergy/synergy.component').then(m => m.SynergyComponent),
    title: 'MLBB GOGO - Sinergi'
  },
  {
    path: '**',
    redirectTo: ''
  }
];