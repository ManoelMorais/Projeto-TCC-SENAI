import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response-types';
import { LoginRequest } from '../types/login-request-types';
import { API_BASE } from '../config/api.config';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = `${API_BASE}/auth`;
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) { }
  login(payload: LoginRequest): Observable<LoginResponse> {
    const url = `${this.apiUrl}/login`;
    console.log('[LoginService] POST', url, payload);
    return this.http.post<LoginResponse>(url, payload).pipe(
      tap((res: LoginResponse) => {
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
