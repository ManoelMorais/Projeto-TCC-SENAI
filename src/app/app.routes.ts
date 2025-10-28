import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Auth } from './pages/auth/auth';
import { Home } from './pages/home/home';
import { FormularioAnomalias } from './pages/formulario-anomalias/formulario-anomalias';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'autenticacao',
    component: Auth,
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'formulario-anomalias',
    component: FormularioAnomalias
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
