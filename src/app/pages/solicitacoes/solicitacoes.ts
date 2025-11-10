import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { DefaultLayoutHeader } from '../../components/default-layout-header/default-layout-header';
import { CommonModule, DatePipe } from '@angular/common';
import { SolicitacoesService } from '../../services/solicitacoes-service';

@Component({
  selector: 'app-solicitacoes',
  imports: [DefaultLayoutHeader, RouterLink, CommonModule, DatePipe],
  templateUrl: './solicitacoes.html',
  styleUrl: './solicitacoes.scss'
})
export class Solicitacoes implements OnInit {
  solicitacoes: any[] = [];

  constructor(private solicitacoesService: SolicitacoesService) {}

  ngOnInit(): void {
    this.solicitacoes = this.solicitacoesService.list();
  }
}
