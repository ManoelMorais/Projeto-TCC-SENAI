import { Component } from '@angular/core';
import { DefaultLoginLayout } from '../../components/default-login-layout/default-login-layout';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [DefaultLoginLayout],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {}
