import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response-types';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    constructor(private httpClient: HttpClient) { }

  login(drt: string, password: string){
    return this.httpClient.post<LoginResponse>("/login", { drt, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("username", value.drt)
      })
    )
  }
}
