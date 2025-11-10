import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SolicitacoesService {
  private storageKey = 'app_solicitacoes';
  private solicitacoes: any[] = [];

  constructor() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      this.solicitacoes = raw ? JSON.parse(raw) : [];
    } catch (e) {
      this.solicitacoes = [];
    }
  }

  add(solicitacao: any) {
    const item = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...solicitacao
    };
    this.solicitacoes.unshift(item);
    this.save();
  }

  list(): any[] {
    return this.solicitacoes;
  }

  clear() {
    this.solicitacoes = [];
    localStorage.removeItem(this.storageKey);
  }

  private save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.solicitacoes));
    } catch (e) {
    }
  }
}
