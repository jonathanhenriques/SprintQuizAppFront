
import { EntrarComponent } from './entrar/entrar.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarUsuarioComponent } from './usuario/cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarProvaComponent } from './prova/cadastrar-prova/cadastrar-prova.component';

import { CadastrarQuestaoComponent } from './questao/cadastrar-questao/cadastrar-questao.component';
import { CadastrarAlternativaComponent } from './alternativa/cadastrar-alternativa/cadastrar-alternativa.component';
import { CadastrarCategoriaProvaComponent } from './categoria-prova/cadastrar-categoria-prova/cadastrar-categoria-prova.component';
import { CadastrarCategoriaQuestaoComponent } from './categoria-questao/cadastrar-categoria-questao/cadastrar-categoria-questao.component';

import { AtualizarUsuarioComponent } from './usuario/atualizar-usuario/atualizar-usuario.component';
import { AtualizarProvaComponent } from './prova/atualizar-prova/atualizar-prova.component';
import { AtualizarQuestaoComponent } from './questao/atualizar-questao/atualizar-questao.component';
import { AtualizarAlternativaComponent } from './alternativa/atualizar-alternativa/atualizar-alternativa.component';
import { AtualizarCategoriaProvaComponent } from './categoria-prova/atualizar-categoria-prova/atualizar-categoria-prova.component';
import { AtualizarCategoriaQuestaoComponent } from './categoria-questao/atualizar-categoria-questao/atualizar-categoria-questao.component';


import { DeletarProvaComponent } from './prova/deletar-prova/deletar-prova.component';
import { DeletarQuestaoComponent } from './questao/deletar-questao/deletar-questao.component';
import { DeletarAlternativaComponent } from './alternativa/deletar-alternativa/deletar-alternativa.component';
import { DeletarCategoriaProvaComponent } from './categoria-prova/deletar-categoria-prova/deletar-categoria-prova.component';
import { DeletarCategoriaQuestaoComponent } from './categoria-questao/deletar-categoria-questao/deletar-categoria-questao.component';


import { CriarComponent } from './criar/criar.component';
import { MuralProvasComponent } from './prova/mural-provas/mural-provas.component';
import { MuralQuestoesComponent } from './questao/mural-questoes/mural-questoes.component';
import { AtualizarQuestaoComAlternativaComponent } from './questao/atualizar-questao-com-alternativa/atualizar-questao-com-alternativa.component';
import { QuizzComponent } from './quizz/quizz.component';
import { SelecionarQuestoesComponent } from './questao/selecionar-questoes/selecionar-questoes.component';
import { GaleriaProvasComponent } from './prova/galeriaprovas/galeria-provas.component';
import { RemoverAlternativaDaQuestaoComponent } from './alternativa/remover-alternativa-da-questao/remover-alternativa-da-questao.component';
import { TesteComponent } from './teste/teste.component';
import { CadastrarQuestaoComProvaComponent } from './questao/cadastrar-questao-com-prova/cadastrar-questao-com-prova.component';
import { RemoverQuestaoProvaComponent } from './questao/remover-questao-prova/remover-questao-prova.component';
import { NavegacaoBarComponent } from './navegacao-bar/navegacao-bar.component';




const routes: Routes = [

  { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },

  { path: 'entrar', component: EntrarComponent },
  { path: 'boas-vindas', component: BoasVindasComponent },
  { path: 'criar', component: CriarComponent },

  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  { path: 'cadastrar-prova', component: CadastrarProvaComponent },
  { path: 'cadastrar-questao', component: CadastrarQuestaoComponent },
  { path: 'cadastrar-questao-com-prova/:id', component: CadastrarQuestaoComProvaComponent },
  { path: 'cadastrar-alternativa/:id', component: CadastrarAlternativaComponent },
  { path: 'cadastrar-categoria-prova', component: CadastrarCategoriaProvaComponent },
  { path: 'cadastrar-categoria-questao', component: CadastrarCategoriaQuestaoComponent },

  { path: 'atualizar-usuario/:id', component: AtualizarUsuarioComponent },
  { path: 'atualizar-prova/:id', component: AtualizarProvaComponent },
  { path: 'atualizar-questao/:id', component: AtualizarQuestaoComponent },
  { path: 'atualizar-alternativa/:id', component: AtualizarAlternativaComponent },
  { path: 'atualizar-categoria-prova/:id', component: AtualizarCategoriaProvaComponent },
  { path: 'atualizar-categoria-questao/:id', component: AtualizarCategoriaQuestaoComponent },
  { path: 'atualizar-questao-com-alternativa/:id', component: AtualizarQuestaoComAlternativaComponent },



  { path: 'deletar-prova/:id', component: DeletarProvaComponent },
  { path: 'deletar-questao/:id', component: DeletarQuestaoComponent },
  { path: 'deletar-alternativa/:id', component: DeletarAlternativaComponent },
  { path: 'deletar-categoria-prova/:id', component: DeletarCategoriaProvaComponent },
  { path: 'deletar-categoria-questao/:id', component: DeletarCategoriaQuestaoComponent },

  { path: 'mural-provas', component: MuralProvasComponent },
  { path: 'mural-questoes', component: MuralQuestoesComponent },

  { path: 'quizz/:id', component: QuizzComponent },
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
