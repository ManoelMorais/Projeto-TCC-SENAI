import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response-types';
import { LoginRequest } from '../types/login-request-types';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // base URL para a API. ajustar porta/host conforme seu backend
  apiUrl: string = "http://localhost:8080/auth";
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) { }
  login(payload: LoginRequest): Observable<LoginResponse> {
    // Observação: `apiUrl` já contém `/auth`, então não duplicamos aqui —
    // a URL final fica: http://localhost:8080/auth/login
    const url = `${this.apiUrl}/login`;
    return this.http.post<LoginResponse>(url, payload).pipe(
      tap((res: LoginResponse) => {
        // garantimos a tipagem explícita aqui para evitar erros de "{}"
        const token = res?.token;
        if (token) {
          localStorage.setItem(this.tokenKey, token);
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
