import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response-types';
import { LoginRequest } from '../types/login-request-types';
import { API_BASE } from '../config/api.config';
import { Observable, tap, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = `${API_BASE}/auth`;
  private tokenKey = 'auth_token';
  private userKey = 'auth_user';
  private userSubject = new BehaviorSubject<any | null>(this.readUserFromStorage());
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }
  login(payload: LoginRequest): Observable<LoginResponse> {
    const url = `${this.apiUrl}/login`;
    console.log('[LoginService] POST', url, payload);
    return this.http.post<LoginResponse>(url, payload).pipe(
      tap((res: LoginResponse) => {
        const token = res?.token;
        if (token) {
          localStorage.setItem(this.tokenKey, token);
          // store user info for UI (try multiple possible response fields)
          this.setUserFromResponse(res);
        }
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.userSubject.next(null);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getUser(): { nome: string; cargo: string; drt: number } | null {
    return this.readUserFromStorage();
  }

  /**
   * Extracts user info from a login response and persists it.
   * This is defensive: accepts multiple common field names used by backends.
   */
  setUserFromResponse(res: any): void {
    if (!res) return;
    const drt = res.drt ?? res.drtUsuario ?? res.drt_user ?? res.user?.drt ?? null;

    const nome =
      res.nome ??
      res.name ??
      res.nomeUsuario ??
      res.usuario?.nome ??
      res.user?.name ??
      null;

    const cargo =
      res.cargo ??
      res.role ??
      res.funcao ??
      res.cargoUsuario ??
      res.user?.cargo ??
      res.user?.role ??
      null;

    const user = { nome, cargo, drt };
    try {
      localStorage.setItem(this.userKey, JSON.stringify(user));
      this.userSubject.next(user);
    } catch (e) {
      console.warn('Failed to persist user info', e);
    }
  }

  private readUserFromStorage(): { nome: string; cargo: string; drt: number } | null {
    try {
      // durante server-side rendering (prerender) localStorage não existe
      if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
        return null;
      }
      const raw = localStorage.getItem(this.userKey);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
}
