import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-default-layout-header',
  imports: [CommonModule],
  templateUrl: './default-layout-header.html',
  styleUrl: './default-layout-header.scss'
})
export class DefaultLayoutHeader {
  userName: string | null = null;
  userCargo: string | null = null;
  private sub: Subscription | null = null;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    const user = this.loginService.getUser();
    if (user) {
      this.userName = user.nome;
      this.userCargo = user.cargo;
    }
    this.sub = this.loginService.user$.subscribe(u => {
      if (u) {
        this.userName = u.nome;
        this.userCargo = u.cargo;
      } else {
        this.userName = null;
        this.userCargo = null;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/page']);
  }

}
