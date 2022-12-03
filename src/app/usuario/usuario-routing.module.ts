import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from '../shared/nav/nav.component';
import { NavegacaoBarComponent } from '../shared/navegacao-bar/navegacao-bar.component';
import { AtualizarAlternativaComponent } from './alternativa/atualizar-alternativa/atualizar-alternativa.component';
import { CadastrarAlternativaComponent } from './alternativa/cadastrar-alternativa/cadastrar-alternativa.component';
import { DeletarAlternativaComponent } from './alternativa/deletar-alternativa/deletar-alternativa.component';
import { RemoverAlternativaDaQuestaoComponent } from './alternativa/remover-alternativa-da-questao/remover-alternativa-da-questao.component';
import { AtualizarCategoriaProvaComponent } from './categoria-prova/atualizar-categoria-prova/atualizar-categoria-prova.component';
import { CadastrarCategoriaProvaComponent } from './categoria-prova/cadastrar-categoria-prova/cadastrar-categoria-prova.component';
import { DeletarCategoriaProvaComponent } from './categoria-prova/deletar-categoria-prova/deletar-categoria-prova.component';
import { AtualizarCategoriaQuestaoComponent } from './categoria-questao/atualizar-categoria-questao/atualizar-categoria-questao.component';
import { CadastrarCategoriaQuestaoComponent } from './categoria-questao/cadastrar-categoria-questao/cadastrar-categoria-questao.component';
import { DeletarCategoriaQuestaoComponent } from './categoria-questao/deletar-categoria-questao/deletar-categoria-questao.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeletarUsuarioComponent } from './deletar-usuario/deletar-usuario.component';
import { AtualizarProvaComponent } from './prova/atualizar-prova/atualizar-prova.component';
import { CadastrarProvaComponent } from './prova/cadastrar-prova/cadastrar-prova.component';
import { DeletarProvaComponent } from './prova/deletar-prova/deletar-prova.component';
import { GaleriaProvasComponent } from './prova/galeriaprovas/galeria-provas.component';
import { MuralSprintsComponent } from './prova/mural-sprints/mural-sprints.component';
import { AtualizarQuestaoComAlternativaComponent } from './questao/atualizar-questao-com-alternativa/atualizar-questao-com-alternativa.component';
import { AtualizarQuestaoComponent } from './questao/atualizar-questao/atualizar-questao.component';
import { CadastrarQuestaoComProvaComponent } from './questao/cadastrar-questao-com-prova/cadastrar-questao-com-prova.component';
import { CadastrarQuestaoComponent } from './questao/cadastrar-questao/cadastrar-questao.component';
import { DeletarQuestaoComponent } from './questao/deletar-questao/deletar-questao.component';
import { RemoverQuestaoProvaComponent } from './questao/remover-questao-prova/remover-questao-prova.component';
import { SelecionarQuestoesComponent } from './questao/selecionar-questoes/selecionar-questoes.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
    
  { path: '', component: NavComponent, children:[
    { path: 'dashboard', component: DashboardComponent },

   
  // { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  { path: 'deletar-usuario', component: DeletarUsuarioComponent },

  {
    path: 'atualizar-categoria-prova/:id',
    component: AtualizarCategoriaProvaComponent,
  },
  {
    path: 'cadastrar-categoria-prova',
    component: CadastrarCategoriaProvaComponent,
  },
  { path: 'deletar-categoria-prova/:id', component: DeletarCategoriaProvaComponent },

  {
    path: 'atualizar-categoria-questao/:id',
    component: AtualizarCategoriaQuestaoComponent,
  },
  {
    path: 'cadastrar-categoria-questao',
    component: CadastrarCategoriaQuestaoComponent,
  },
  {
    path: 'deletar-categoria-questao/:id',
    component: DeletarCategoriaQuestaoComponent,
  },

  // { path: 'home', component: HomeComponent },

  { path: 'atualizar-prova/:id', component: AtualizarProvaComponent },
  { path: 'cadastrar-prova', component: CadastrarProvaComponent },
  { path: 'deletar-prova/:id', component: DeletarProvaComponent },
  { path: 'galeria-provas/:id', component: GaleriaProvasComponent },
  { path: 'mural-sprints', component: MuralSprintsComponent },

  { path: 'atualizar-questao/:id', component: AtualizarQuestaoComponent },
  {
    path: 'atualizar-questao-com-alternativa/:id',
    component: AtualizarQuestaoComAlternativaComponent,
  },
  { path: 'cadastrar-questao', component: CadastrarQuestaoComponent },
  {
    path: 'cadastrar-questao-com-prova/:id',
    component: CadastrarQuestaoComProvaComponent,
  },
  { path: 'deletar-questao/:id', component: DeletarQuestaoComponent },
  {
    path: 'remover-questao-prova/:id',
    component: RemoverQuestaoProvaComponent,
  },
  { path: 'selecionar-questoes/:id', component: SelecionarQuestoesComponent },

  {
    path: 'atualizar-alternativa/:id',
    component: AtualizarAlternativaComponent,
  },
  {
    path: 'cadastrar-alternativa/:id',
    component: CadastrarAlternativaComponent,
  },
  { path: 'deletar-alternativa/:id', component: DeletarAlternativaComponent },
  {
    path: 'remover-alternativa-da-questao/:id',
    component: RemoverAlternativaDaQuestaoComponent,
  },



  

  { path: 'nav', component: NavComponent },
  { path: 'navegacao-bar', component: NavegacaoBarComponent },

  // { path: 'teste', component: TesteComponent }

]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
