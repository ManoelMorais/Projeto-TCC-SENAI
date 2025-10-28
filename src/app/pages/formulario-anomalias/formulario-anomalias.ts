import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

/*
@Component({
  selector: 'app-formulario-anomalias',
  imports: [ReactiveFormsModule, PrimaryInput],
  templateUrl: './formulario-anomalias.html',
  styleUrl: './formulario-anomalias.scss'
})
export class FormularioAnomalias implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // Dados do solicitante
      nome: ['', Validators.required],
      drt: [''],

      // Classificação e opções
      classificacaoServico: ['', Validators.required],
      manutencaoLeveTipo: [''],
      criticidade: ['', Validators.required],
      tipoEquipe: ['', Validators.required],

      // Campos textuais adicionais
      chaveAbrangencia: [''],
      coordenadas: [''],
      observacoes: [''],

      // Departamento responsável
      departamentoResponsavel: ['', Validators.required],
      departamentoOutro: [''],

      // Dados da nota / localidade
      localidade: ['', Validators.required],
      alimentador: ['', Validators.required],
      numeroAtendimento: ['', Validators.required],
      enderecoNota: ['', Validators.required],

      // Uploads
      fotos: [null]
    })
  }

  ngOnInit(): void {}

  onFilesSelected(event: Event) {
    const input = event.target as HTMLInputElement
    if (!input.files) return
    const files = Array.from(input.files)
    // armazenar arquivos no form control (pode ser processado no submit)
    this.form.patchValue({ fotos: files })
  }

  submit() {
    if (this.form.valid) {
      const value = { ...this.form.value }
      // transformar FileList em metadados se necessário
      console.log('Formulário enviado', value)
      // TODO: enviar para API
    } else {
      this.form.markAllAsTouched()
    }
  }
}
*/

@Component({
  selector: 'app-formulario-anomalias',
  templateUrl: './formulario-anomalias.html',
  styleUrls: ['./formulario-anomalias.scss'],
  imports: [
    PrimaryInput,
    ReactiveFormsModule,
    CommonModule
  ],
  standalone: true
})
export class FormularioAnomalias implements OnInit {
  form!: FormGroup;
  arquivos: File[] = [];

  classificacoes = ['Manutenção leve', 'Manutenção pesada', 'Perdas', 'Comercial/Coi', 'Uso mútuo'];
  tiposManutencao = ['Poste', 'Transformador', 'Cruzeta', 'Limpeza de faixa'];
  criticidades = ['Urgente / Emergência', 'Crítico', 'Alto', 'Médio', 'Baixo'];
  tiposEquipe = ['LVIVA', 'LMORTA', 'PERDAS', 'SEGURANÇA', 'COMERCIAL/OUTROS'];
  departamentos = ['DEOP', 'DCMD', 'DESC', 'Outra'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      nomeSolicitante: ['', Validators.required],
      drtSolicitante: ['', Validators.required],
      classificacao: ['', Validators.required],
      tipoServico: [''],
      criticidade: ['', Validators.required],
      tipoEquipe: ['', Validators.required],
      chaveAbrangencia: [''],
      localizacao: [''],
      observacoes: [''],
      departamento: ['', Validators.required],
      localidade: ['', Validators.required],
      alimentador: ['', Validators.required],
      numeroAtendimento: ['', Validators.required],
      endereco: ['', Validators.required],
      fotos: [null]
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.arquivos = Array.from(input.files).slice(0, 2);
      this.form.patchValue({ fotos: this.arquivos });
    }
  }

  submit() {
    if (this.form.valid) {
      console.log('Dados enviados:', this.form.value);
      console.log('Arquivos:', this.arquivos);
      alert('Formulário enviado com sucesso!');
      this.form.reset();
      this.arquivos = [];
    } else {
      this.form.markAllAsTouched();
    }
  }
}

