import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Auth } from './pages/auth/auth';

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
    path: '**',
    redirectTo: 'login'
  }
];
