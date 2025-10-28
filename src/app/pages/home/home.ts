import { Component } from '@angular/core';
import { DefaultLayoutFooter } from '../../components/default-layout-footer/default-layout-footer';
import { DefaultLayoutHeader } from '../../components/default-layout-header/default-layout-header';

@Component({
  selector: 'app-home',
  imports: [DefaultLayoutFooter, DefaultLayoutHeader],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
