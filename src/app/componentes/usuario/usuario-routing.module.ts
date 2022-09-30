import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarAlternativaComponent } from './alternativa/atualizar-alternativa/atualizar-alternativa.component';
import { CadastrarAlternativaComponent } from './alternativa/cadastrar-alternativa/cadastrar-alternativa.component';
import { DeletarAlternativaComponent } from './alternativa/deletar-alternativa/deletar-alternativa.component';
import { RemoverAlternativaDaQuestaoComponent } from './alternativa/remover-alternativa-da-questao/remover-alternativa-da-questao.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { AtualizarCategoriaProvaComponent } from './categoria-prova/atualizar-categoria-prova/atualizar-categoria-prova.component';
import { CadastrarCategoriaProvaComponent } from './categoria-prova/cadastrar-categoria-prova/cadastrar-categoria-prova.component';
import { AtualizarCategoriaQuestaoComponent } from './categoria-questao/atualizar-categoria-questao/atualizar-categoria-questao.component';
import { CadastrarCategoriaQuestaoComponent } from './categoria-questao/cadastrar-categoria-questao/cadastrar-categoria-questao.component';
import { DeletarCategoriaQuestaoComponent } from './categoria-questao/deletar-categoria-questao/deletar-categoria-questao.component';
import { DeletarUsuarioComponent } from './deletar-usuario/deletar-usuario.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NavegacaoBarComponent } from './navegacao-bar/navegacao-bar.component';
import { AtualizarProvaComponent } from './prova/atualizar-prova/atualizar-prova.component';
import { CadastrarProvaComponent } from './prova/cadastrar-prova/cadastrar-prova.component';
import { DeletarProvaComponent } from './prova/deletar-prova/deletar-prova.component';
import { GaleriaProvasComponent } from './prova/galeriaprovas/galeria-provas.component';
import { MuralProvasComponent } from './prova/mural-provas/mural-provas.component';
import { MuralSprintsComponent } from './prova/mural-sprints/mural-sprints.component';
import { AtualizarQuestaoComAlternativaComponent } from './questao/atualizar-questao-com-alternativa/atualizar-questao-com-alternativa.component';
import { AtualizarQuestaoComponent } from './questao/atualizar-questao/atualizar-questao.component';
import { CadastrarQuestaoComProvaComponent } from './questao/cadastrar-questao-com-prova/cadastrar-questao-com-prova.component';
import { CadastrarQuestaoComponent } from './questao/cadastrar-questao/cadastrar-questao.component';
import { DeletarQuestaoComponent } from './questao/deletar-questao/deletar-questao.component';
import { MuralQuestoesComponent } from './questao/mural-questoes/mural-questoes.component';
import { RemoverQuestaoProvaComponent } from './questao/remover-questao-prova/remover-questao-prova.component';
import { SelecionarQuestoesComponent } from './questao/selecionar-questoes/selecionar-questoes.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: NavComponent, children:[
    { path: '', component: EntrarComponent },
    { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
    { path: 'home', component: HomeComponent },
  ] },
  { path: 'atualizar-usuario/:id', component: AtualizarUsuarioComponent },
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
  // { path: 'deletar-categoria-prova/:id', component: DeletarCategoriaProvaComponent },

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

  // { path: 'entrar', component: EntrarComponent },
  // { path: 'home', component: HomeComponent },

  { path: 'atualizar-prova/:id', component: AtualizarProvaComponent },
  { path: 'cadastrar-prova', component: CadastrarProvaComponent },
  { path: 'deletar-prova/:id', component: DeletarProvaComponent },
  { path: 'galeria-provas/:id', component: GaleriaProvasComponent },
  { path: 'mural-provas', component: MuralProvasComponent },
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
  { path: 'mural-questoes', component: MuralQuestoesComponent },
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

  { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },

  { path: 'quizz/:id', component: QuizzComponent },

  { path: 'resultados/:id', component: ResultadosComponent },
  // { path: 'resultados', component: ResultadosComponent }

  { path: 'nav', component: NavComponent },
  { path: 'navegacao-bar', component: NavegacaoBarComponent },

  // { path: 'teste', component: TesteComponent }

  //   { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
