# ProjetoTCC

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

<!--
Alguns pontos do Formulário, uns já estão ok, outros so ajusta algumas coisa

Perguntas para o Formulário de Registro de Anomalias (Setor Elétrico)

Feito - I. Identificação e Localização (Onde e Quem)
Estas perguntas devem ser rápidas, possivelmente com menus suspensos (dropdowns) ou preenchimento automático (geolocalização, login).

Fazer - Tipo de Rede Afetada: lista de opção
   Rede de Distribuição (Baixa Tensão - BT)
    Distribuição (Média Tensão - MT)
   Transmissão (Alta Tensão - AT)
    Subestação / Pátio
   Outro (Especifique: ____)
 
Feito - Localização (Coordenadas / Endereço):
   
Feito - Campo de preenchimento automático via GPS/Mapa.
 
Feito - Município/Regional/Circunscrição: Campo de menu suspenso ou preenchimento automático.
 
Fazer - Ativo/Identificação da Estrutura Mais Próxima (Se aplicável):
   * (Ex: Número da Torre, Código do Poste, Nome da Subestação)
 
Feito - Nome Completo do Registrador (Quem reportou): Campo de preenchimento automático via login.
 
Fazer - Função/Equipe do Registrador: lista de opção
   Eletricista de Linha Viva
  Leiturista / Inspecção de Campo
    Engenheiro / Técnico de Planejamento
   Supervisor de Manutenção
   Outro (Especifique: ____)

II. Caracterização da Anomalia (O que e Quando)
Foco em detalhar o problema para a equipe de resposta.

Feito Data e Hora da Detecção da Anomalia: (Campo de data e hora)

Fazer - Tipo de Anomalia (Classificação Primária): lista de opção

Falha de Ativo: (Ex: Poste partido, Isolador quebrado, Cabo rompido)   
Irregularidade/Fraude: (Ex: Ligação clandestina, Medição manipulada)
Risco de Segurança: (Ex: Fogo em vegetação próximo à linha, Risco de queda)
Problema de Qualidade de Energia: (Ex: Flutuação de tensão, Oscilação visível)
Ambiental/Climático: (Ex: Árvore caindo sobre a linha, Erosão na base da torre)
Outro (Especifique):


Fazer - Componente/Equipamento Específico Afetado: lista de opção
   * Condutor / Cabo
   * Estrutura de Suporte (Poste / Torre)
   * Transformador
    Isolador / Para-raios
    Medidor / Caixa de Medição
   * Equipamento de Manobra (Chave, Disjuntor)
   * Acessórios (Cruzeta, Ferragens)
   Outro (Especifique: ____)

 
Fazer - Gravidade/Urgência da Situação: lista de opção
  
Crítica (Ação Imediata): Risco iminente à vida, interrupção do serviço, incêndio.
Alta: Dano evidente que pode evoluir para interrupção ou risco em curto prazo.
Média: Necessidade de reparo ou inspeção dentro do planejamento de manutenção.
Baixa: Irregularidade estética, documental ou menor que não afeta a operação imediata.
 
Fazer - Há Interrupção de Energia Associada? lista de opção
Sim (Total)
Sim (Parcial/Flutuação)
Não

III. Descrição e Evidência (Detalhes Essenciais)

 * Descrição Detalhada da Anomalia:
   * (Campo de texto aberto, solicitar que sejam breves e objetivos.)
   * Exemplo: "Transformador vazando óleo intensamente na base do poste n° 123. Cheiro forte de queimado."
 
* Evidência Fotográfica/Vídeo:
   * (Campo para upload de até 3 fotos/vídeos.)
   * Sugestão: Incluir checklist: (1) Foto de perto do dano, (2) Foto da estrutura completa com o dano, (3) Foto do local geral.
 
Fazer - Condição de Acesso ao Local: lista de opção
   
Acesso Fácil (Próximo à via pavimentada)
Acesso Médio (Estrada de terra, difícil para veículos grandes)
Acesso Difícil (Trilha, Necessita 4x4 ou caminhada longa)
Acesso Perigoso (Ex: Área de risco social, inundações)


Fazer - A equipe tomou alguma Ação Mitigadora Imediata? lista de opção
   
Não (Segurança em primeiro lugar, não foi possível)
Sim (Ex: Sinalização, Isolamento da área, Desligamento de chave local)
   * Se sim, qual? (Campo de texto)

IV. Campos Opcionais para Análise 

Fazer - Pós-Registro - lista de opção
Causa Provável da Anomalia (Opinião do Registrador):
Ação de Terceiros (Vandalismo, Colisão, Furto) Fenômeno Natural (Vento, Chuva, Descarga Atmosférica)
Desgaste Natural / Fim de Vida Útil
Erro de Montagem / Projeto Anterior
Outro (Especifique: ____)

Fazer - Observações 

Fazer  Adicionais para a Equipe de Resposta: (Campo de texto livre para qualquer detalhe extra.)

-->
