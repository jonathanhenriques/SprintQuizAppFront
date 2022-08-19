import { InicioComponent } from './inicio/inicio.component';

import { EntrarComponent } from './entrar/entrar.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarUsuarioComponent } from './cadastrar/cadastrar-usuario/cadastrar-usuario.component';
import { CadastrarProvaComponent } from './cadastrar/cadastrar-prova/cadastrar-prova.component';
import { CadastrarQuestaoComponent } from './cadastrar/cadastrar-questao/cadastrar-questao.component';
import { CadastrarAlternativaComponent } from './cadastrar/cadastrar-alternativa/cadastrar-alternativa.component';
import { CadastrarCategoriaProvaComponent } from './cadastrar/cadastrar-categoria-prova/cadastrar-categoria-prova.component';
import { CadastrarCategoriaQuestaoComponent } from './cadastrar/cadastrar-categoria-questao/cadastrar-categoria-questao.component';

import { AtualizarUsuarioComponent } from './atualizar/atualizar-usuario/atualizar-usuario.component';
import { AtualizarProvaComponent } from './atualizar/atualizar-prova/atualizar-prova.component';
import { AtualizarQuestaoComponent } from './atualizar/atualizar-questao/atualizar-questao.component';
import { AtualizarAlternativaComponent } from './atualizar/atualizar-alternativa/atualizar-alternativa.component';
import { AtualizarCategoriaProvaComponent } from './atualizar/atualizar-categoria-prova/atualizar-categoria-prova.component';
import { AtualizarCategoriaQuestaoComponent } from './atualizar/atualizar-categoria-questao/atualizar-categoria-questao.component';


import { DeletarProvaComponent } from './deletar/deletar-prova/deletar-prova.component';
import { DeletarQuestaoComponent } from './deletar/deletar-questao/deletar-questao.component';
import { DeletarAlternativaComponent } from './deletar/deletar-alternativa/deletar-alternativa.component';
import { DeletarCategoriaProvaComponent } from './deletar/deletar-categoria-prova/deletar-categoria-prova.component';
import { DeletarCategoriaQuestaoComponent } from './deletar/deletar-categoria-questao/deletar-categoria-questao.component';


import { CriarComponent } from './criar/criar.component';




const routes: Routes = [

  { path: '', redirectTo: 'entrar', pathMatch: 'full' },

  { path: 'entrar', component: EntrarComponent },
  { path: 'boas-vindas', component: BoasVindasComponent },
  { path: 'criar', component: CriarComponent },

  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  { path: 'cadastrar-prova', component: CadastrarProvaComponent },
  { path: 'cadastrar-questao', component: CadastrarQuestaoComponent },
  { path: 'cadastrar-alternativa', component: CadastrarAlternativaComponent },
  { path: 'cadastrar-categoria-prova', component: CadastrarCategoriaProvaComponent },
  { path: 'cadastrar-categoria-questao', component: CadastrarCategoriaQuestaoComponent },

  { path: 'atualizar-usuario', component: AtualizarUsuarioComponent },
  { path: 'atualizar-prova', component: AtualizarProvaComponent },
  { path: 'atualizar-questao', component: AtualizarQuestaoComponent },
  { path: 'atualizar-alternativa', component: AtualizarAlternativaComponent },
  { path: 'atualizar-categoria-prova', component: AtualizarCategoriaProvaComponent },
  { path: 'atualizar-categoria-questao', component: AtualizarCategoriaQuestaoComponent },


  { path: 'deletar-prova', component: DeletarProvaComponent },
  { path: 'deletar-questao', component: DeletarQuestaoComponent },
  { path: 'deletar-alternativa', component: DeletarAlternativaComponent },
  { path: 'deletar-categoria-prova', component: DeletarCategoriaProvaComponent },
  { path: 'deletar-categoria-questao', component: DeletarCategoriaQuestaoComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
