import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-default-layout-header',
  imports: [CommonModule],
  templateUrl: './default-layout-header.html',
  styleUrl: './default-layout-header.scss'
})
export class DefaultLayoutHeader {
  constructor(private loginService: LoginService, private router: Router) {}

  logout() {
    this.loginService.logout();
    this.router.navigate(['/page']);
  }

}
