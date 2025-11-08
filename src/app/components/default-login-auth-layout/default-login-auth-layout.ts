import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { CommonModule } from '@angular/common';
import { finalize, timeout } from 'rxjs/operators';
import { catchError, throwError, Subscription } from 'rxjs';

@Component({
  selector: 'app-default-login-auth-layout',
  imports: [CommonModule],
  templateUrl: './default-login-auth-layout.html',
  styleUrl: './default-login-auth-layout.scss'
})
export class DefaultLoginAuthLayout {
  error: string = '';
  isLoading: boolean = false;
  private loginSub: Subscription | null = null;

  constructor(private loginService: LoginService, private router: Router) {}

  submit(drtValue: string | number, passwordValue: string) {
    // normalize values
    const drt = String(drtValue || '').trim();
    const password = String(passwordValue || '').trim();

    if (!drt || !password) {
      console.warn('Empty token!');
      this.error = 'Preencha DRT e senha';
      return;
    }

    // criar o payload conforme o tipo LoginRequest do backend
    // cancela qualquer tentativa anterior pendente
    if (this.loginSub) {
      this.loginSub.unsubscribe();
      this.loginSub = null;
    }
    this.error = '';
    this.isLoading = true;

    this.loginSub = this.loginService
      .login({ drtUsuario: drt, senhaUsuario: password })
      .pipe(
        // timeout cliente para evitar espera indefinida
        timeout(8000),
        catchError((err) => {
          console.error('Login request error (caught)', err);
          // Mensagem genérica por segurança
          this.error = 'Algo deu errado. Tente novamente.';
          return throwError(() => err);
        }),
        finalize(() => {
          // garante que isLoading será false independentemente do resultado
          this.isLoading = false;
          this.loginSub = null;
        })
      )
      .subscribe({
        next: (res: any) => {
          // loginService já salva o token no localStorage via tap,
          // mas em alguns casos os nomes dos campos podem variar —
          // garantimos que o serviço mapeie corretamente a resposta.
          try {
            this.loginService.setUserFromResponse(res);
          } catch (e) {
            console.warn('Could not map user from login response', e);
          }
          this.router.navigate(['/home']);
        },
        error: (err) => {
          // já tratamos erro no catchError acima; por segurança logamos também
          console.error('Login failed', err);
        }
      });
  }

  onInputChange() {
    // permite ao usuário cancelar uma tentativa e tentar novamente
    if (this.loginSub) {
      this.loginSub.unsubscribe();
      this.loginSub = null;
    }
    this.isLoading = false;
    this.error = '';
  }
}
