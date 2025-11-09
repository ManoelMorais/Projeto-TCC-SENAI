import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login-service';
import { Subscription } from 'rxjs';
import { Map } from "../../map/map";

@Component({
  selector: 'app-formulario-anomalias',
  templateUrl: './formulario-anomalias.html',
  styleUrls: ['./formulario-anomalias.scss'],
  imports: [
    PrimaryInput,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    Map
  ],
  standalone: true
})
export class FormularioAnomalias implements OnInit {

  showSuccess: boolean = false;

  form!: FormGroup;
  private userSub: Subscription | null = null;

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) {}

  voltar() {
    this.router.navigate(['/home']);
  }

  arquivos: File[] = [];

  classificacoes = ['Manutenção pesada', 'Inspeção', 'Emergência'];
  tiposEquipe = ['Própria', 'Terceirizada'];
  departamentos = ['Operação', 'Planejamento', 'Manutenção'];

  funcoesRegistrador = [
    'Eletricista de Linha Viva',
    'Leiturista / Inspecção de Campo',
    'Engenheiro / Técnico de Planejamento',
    'Supervisor de Manutenção',
    'Outro'
  ];

  tiposRede = [
    'Rede de Distribuição (Baixa Tensão - BT)',
    'Distribuição (Média Tensão - MT)',
    'Transmissão (Alta Tensão - AT)',
    'Subestação / Pátio',
    'Outro'
  ];

  tiposAnomalia = [
    'Falha de Ativo',
    'Irregularidade/Fraude',
    'Risco de Segurança',
    'Problema de Qualidade de Energia',
    'Ambiental/Climático',
    'Outro'
  ];

  componentesAfetados = [
    'Condutor / Cabo',
    'Estrutura de Suporte (Poste / Torre)',
    'Transformador',
    'Isolador / Para-raios',
    'Medidor / Caixa de Medição',
    'Equipamento de Manobra (Chave, Disjuntor)',
    'Acessórios (Cruzeta, Ferragens)',
    'Outro'
  ];

  criticidades = [
    'Crítica (Ação Imediata)',
    'Alta',
    'Média',
    'Baixa'
  ];

  tiposInterrupcao = [
    'Sim (Total)',
    'Sim (Parcial/Flutuação)',
    'Não'
  ];

  condicoesAcesso = [
    'Acesso Fácil (Próximo à via pavimentada)',
    'Acesso Médio (Estrada de terra, difícil para veículos grandes)',
    'Acesso Difícil (Trilha, Necessita 4x4 ou caminhada longa)',
    'Acesso Perigoso (Ex: Área de risco social, inundações)'
  ];

  acoesMitigadoras = [
    'Não (Segurança em primeiro lugar, não foi possível)',
    'Sim (Ex: Sinalização, Isolamento da área, Desligamento de chave local)'
  ];

  causasProvaveis = [
    'Ação de Terceiros (Vandalismo, Colisão, Furto)',
    'Fenômeno Natural (Vento, Chuva, Descarga Atmosférica)',
    'Desgaste Natural / Fim de Vida Útil',
    'Erro de Montagem / Projeto Anterior',
    'Outro'
  ];

  ngOnInit(): void {
    this.form = this.fb.group({
      dataSolicitacao: [{ value: this.getCurrentDateTime(), disabled: true }],
  dataDeteccao: [this.getCurrentDateTime(), Validators.required],
      nomeSolicitante: [{ value: 'Nome Automático (Via Login)', disabled: true }, Validators.required],
      drtSolicitante: [{ value: 'DRT Automática (Via Login)', disabled: true }, Validators.required],
      funcaoRegistrador: [null, Validators.required],
      funcaoRegistradorOutro: [''],

      tipoRedeAfetada: [null, Validators.required],
      tipoRedeAfetadaOutro: [''],
      identificacaoEstrutura: [''],
      chaveAbrangencia: [''],
      alimentador: [''],

      tipoAnomalia: [null, Validators.required],
      tipoAnomaliaOutro: [''],
      componenteAfetado: [null, Validators.required],
      componenteAfetadoOutro: [''],
      criticidade: [null, Validators.required],
      interrupcao: [null, Validators.required],

      classificacao: [null, Validators.required],
      tipoServico: [''],
      tipoEquipe: [null],
      departamento: [null],
      condicaoAcesso: [null, Validators.required],
      acaoMitigadora: [null, Validators.required],
      qualAcaoMitigadora: [''],

      observacoes: ['', Validators.required],
      causaProvavel: [''],
      causaProvavelOutro: [''],
      observacoesAdicionais: [''],
    });

    this.form.get('dataSolicitacao')?.setValue(this.getCurrentDateTime());

    const user = this.loginService.getUser();
    this.applyUserToForm(user);

    this.userSub = this.loginService.user$.subscribe(u => {
      if (u) this.applyUserToForm(u);
    });
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

  private applyUserToForm(user: any | null) {
    if (!user) return;
    this.form.get('nomeSolicitante')?.setValue(user.nome ?? '');
    this.form.get('drtSolicitante')?.setValue(user.drt ?? '');

    const cargo = (user.cargo ?? '').toString();
    if (cargo) {
      const match = this.funcoesRegistrador.find(f => f.toLowerCase() === cargo.toLowerCase());
      if (match) {
        this.form.get('funcaoRegistrador')?.setValue(match);
      } else if (this.funcoesRegistrador.includes('Outro')) {
        this.form.get('funcaoRegistrador')?.setValue('Outro');
        this.form.get('funcaoRegistradorOutro')?.setValue(cargo);
      } else {
        this.form.get('funcaoRegistrador')?.setValue(cargo);
      }
    }
  }

  getCurrentDateTime(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  onFileSelected(event: any): void {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files as FileList);
      if (this.arquivos.length + selectedFiles.length > 3) {
        alert('Você pode selecionar no máximo 3 arquivos (fotos/vídeos).');
        const remainingSlots = 3 - this.arquivos.length;
        this.arquivos.push(...selectedFiles.slice(0, remainingSlots));
      } else {
        this.arquivos.push(...selectedFiles);
      }
    }
  }

  removeFile(file: File): void {
    this.arquivos = this.arquivos.filter(f => f !== file);
  }

  submit() {
    if (this.form.valid) {
      console.log('Dados enviados:', this.form.value);
      console.log('Arquivos:', this.arquivos);
      this.showSuccess = true;
      this.form.markAsPristine();
      this.arquivos = [];
    } else {
      this.form.markAllAsTouched();
    }
  }

  goHome() {
    this.showSuccess = false;
    this.router.navigate(['/home']);
  }

  closeModal() {
    this.showSuccess = false;
  }
}
