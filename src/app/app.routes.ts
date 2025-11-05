import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Auth } from './pages/auth/auth';
import { Home } from './pages/home/home';
import { FormularioAnomalias } from './pages/formulario-anomalias/formulario-anomalias';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'page',
    component: Login,
  },
  {
    path: 'autenticacao',
    component: Auth,
  },
  {
    path: 'home',
    component: Home,
    //canActivate: [AuthGuard]
  },
  {
    path: 'formulario-anomalias',
    component: FormularioAnomalias,
    //canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'page'
  }
];
