import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PrimaryInput } from '../../components/primary-input/primary-input';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
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

  constructor(private fb: FormBuilder, private router: Router) {}

  voltar() {
    this.router.navigate(['/home']);
  }

  form!: FormGroup;
  arquivos: File[] = [];

  classificacoes = ['Manutenção leve', 'Manutenção pesada', 'Perdas', 'Comercial/Coi', 'Uso mútuo'];
  tiposManutencao = ['Poste', 'Transformador', 'Cruzeta', 'Limpeza de faixa'];
  criticidades = ['Urgente / Emergência', 'Crítico', 'Alto', 'Médio', 'Baixo'];
  tiposEquipe = ['LVIVA', 'LMORTA', 'PERDAS', 'SEGURANÇA', 'COMERCIAL/OUTROS'];
  departamentos = ['DEOP', 'DCMD', 'DESC', 'Outra'];

  ngOnInit() {
    const now = new Date();
    const nowForInput = this.toDateTimeLocal(now); // yyyy-MM-ddTHH:mm for datetime-local

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
      fotos: [null],
      // campo de data/hora preenchido automaticamente com a hora local do usuário
      dataSolicitacao: [nowForInput]
    });
  }

  /**
   * Converte uma Date em string no formato aceito por <input type="datetime-local">:
   * YYYY-MM-DDTHH:MM (sem timezone)
   */
  private toDateTimeLocal(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const yyyy = date.getFullYear();
    const mm = pad(date.getMonth() + 1);
    const dd = pad(date.getDate());
    const hh = pad(date.getHours());
    const min = pad(date.getMinutes());
    return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
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

