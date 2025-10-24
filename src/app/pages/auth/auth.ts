import { Component } from '@angular/core';
import { DefaultLoginAuthLayout } from '../../components/default-login-auth-layout/default-login-auth-layout';

@Component({
  standalone: true,
  selector: 'app-auth',
  imports: [DefaultLoginAuthLayout],
  templateUrl: './auth.html',
  styleUrls: ['./auth.scss']
})
export class Auth {

}
