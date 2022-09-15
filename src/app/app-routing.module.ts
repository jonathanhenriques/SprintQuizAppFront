
import { EntrarComponent } from './componentes/entrar/entrar.component';
import { BoasVindasComponent } from './componentes/boas-vindas/boas-vindas.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarUsuarioComponent } from './componentes/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarProvaComponent } from './componentes/prova/cadastrar-prova/cadastrar-prova.component';

import { CadastrarQuestaoComponent } from './componentes/questao/cadastrar-questao/cadastrar-questao.component';
import { CadastrarAlternativaComponent } from './componentes/alternativa/cadastrar-alternativa/cadastrar-alternativa.component';
import { CadastrarCategoriaProvaComponent } from './componentes/categoria-prova/cadastrar-categoria-prova/cadastrar-categoria-prova.component';
import { CadastrarCategoriaQuestaoComponent } from './componentes/categoria-questao/cadastrar-categoria-questao/cadastrar-categoria-questao.component';

import { AtualizarUsuarioComponent } from './componentes/usuario/atualizar-usuario/atualizar-usuario.component';
import { AtualizarProvaComponent } from './componentes/prova/atualizar-prova/atualizar-prova.component';
import { AtualizarQuestaoComponent } from './componentes/questao/atualizar-questao/atualizar-questao.component';
import { AtualizarAlternativaComponent } from './componentes/alternativa/atualizar-alternativa/atualizar-alternativa.component';
import { AtualizarCategoriaProvaComponent } from './componentes/categoria-prova/atualizar-categoria-prova/atualizar-categoria-prova.component';
import { AtualizarCategoriaQuestaoComponent } from './componentes/categoria-questao/atualizar-categoria-questao/atualizar-categoria-questao.component';


import { DeletarProvaComponent } from './componentes/prova/deletar-prova/deletar-prova.component';
import { DeletarQuestaoComponent } from './componentes/questao/deletar-questao/deletar-questao.component';
import { DeletarAlternativaComponent } from './componentes/alternativa/deletar-alternativa/deletar-alternativa.component';
import { DeletarCategoriaProvaComponent } from './componentes/categoria-prova/deletar-categoria-prova/deletar-categoria-prova.component';
import { DeletarCategoriaQuestaoComponent } from './componentes/categoria-questao/deletar-categoria-questao/deletar-categoria-questao.component';


import { MuralProvasComponent } from './componentes/prova/mural-provas/mural-provas.component';
import { MuralQuestoesComponent } from './componentes/questao/mural-questoes/mural-questoes.component';
import { AtualizarQuestaoComAlternativaComponent } from './componentes/questao/atualizar-questao-com-alternativa/atualizar-questao-com-alternativa.component';
import { QuizzComponent } from './componentes/quizz/quizz.component';
import { SelecionarQuestoesComponent } from './componentes/questao/selecionar-questoes/selecionar-questoes.component';
import { GaleriaProvasComponent } from './componentes/prova/galeriaprovas/galeria-provas.component';
import { RemoverAlternativaDaQuestaoComponent } from './componentes/alternativa/remover-alternativa-da-questao/remover-alternativa-da-questao.component';
import { TesteComponent } from './teste/teste.component';
import { CadastrarQuestaoComProvaComponent } from './componentes/questao/cadastrar-questao-com-prova/cadastrar-questao-com-prova.component';
import { RemoverQuestaoProvaComponent } from './componentes/questao/remover-questao-prova/remover-questao-prova.component';
import { NavegacaoBarComponent } from './componentes/navegacao-bar/navegacao-bar.component';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { MuralSprintsComponent } from './componentes/prova/mural-sprints/mural-sprints.component';




const routes: Routes = [

  // { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },
  { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },

  {
    path: '', component: NavComponent,

    children: [
      // { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },
      { path: 'atualizar-usuario/:id', component: AtualizarUsuarioComponent },
      { path: 'home', component: HomeComponent },
      { path: 'mural-provas', component: MuralProvasComponent },
      { path: 'mural-sprints', component: MuralSprintsComponent },
      { path: 'mural-questoes', component: MuralQuestoesComponent },
      // { path: 'entrar', component: EntrarComponent },
      // { path: 'boas-vindas', component: BoasVindasComponent },
      { path: 'cadastrar-prova', component: CadastrarProvaComponent },
      { path: 'quizz/:id', component: QuizzComponent },
      { path: 'resultados/:id', component: ResultadosComponent },
      { path: 'dashboard', component: DashboardComponent }


    ]
  },


  { path: 'boas-vindas', component: BoasVindasComponent },


  { path: 'nav', component: NavComponent },

  { path: 'entrar', component: EntrarComponent },
  { path: 'boas-vindas', component: BoasVindasComponent },

  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  // { path: 'cadastrar-prova', component: CadastrarProvaComponent },
  { path: 'cadastrar-questao', component: CadastrarQuestaoComponent },
  { path: 'cadastrar-questao-com-prova/:id', component: CadastrarQuestaoComProvaComponent },
  { path: 'cadastrar-alternativa/:id', component: CadastrarAlternativaComponent },
  { path: 'cadastrar-categoria-prova', component: CadastrarCategoriaProvaComponent },
  { path: 'cadastrar-categoria-questao', component: CadastrarCategoriaQuestaoComponent },

  // { path: 'atualizar-usuario/:id', component: AtualizarUsuarioComponent },
  { path: 'atualizar-prova/:id', component: AtualizarProvaComponent },
  { path: 'atualizar-questao/:id', component: AtualizarQuestaoComponent },
  { path: 'atualizar-alternativa/:id', component: AtualizarAlternativaComponent },
  { path: 'atualizar-categoria-prova/:id', component: AtualizarCategoriaProvaComponent },
  { path: 'atualizar-categoria-questao/:id', component: AtualizarCategoriaQuestaoComponent },
  { path: 'atualizar-questao-com-alternativa/:id', component: AtualizarQuestaoComAlternativaComponent },

  // { path: 'resultados', component: ResultadosComponent }

  { path: 'deletar-prova/:id', component: DeletarProvaComponent },
  { path: 'deletar-questao/:id', component: DeletarQuestaoComponent },
  { path: 'deletar-alternativa/:id', component: DeletarAlternativaComponent },
  { path: 'deletar-categoria-prova/:id', component: DeletarCategoriaProvaComponent },
  { path: 'deletar-categoria-questao/:id', component: DeletarCategoriaQuestaoComponent },

  // { path: 'mural-provas', component: MuralProvasComponent },
  // { path: 'mural-questoes', component: MuralQuestoesComponent },

  // { path: 'quizz/:id', component: QuizzComponent },
  { path: 'selecionar-questoes/:id', component: SelecionarQuestoesComponent },
  { path: 'galeria-provas/:id', component: GaleriaProvasComponent },
  { path: 'remover-alternativa-da-questao/:id', component: RemoverAlternativaDaQuestaoComponent },
  { path: 'remover-questao-prova/:id', component: RemoverQuestaoProvaComponent },

  // { path: 'navegacao-bar', component: NavegacaoBarComponent  },

  { path: 'teste', component: TesteComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
