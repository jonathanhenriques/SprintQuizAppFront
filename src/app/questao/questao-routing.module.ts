import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarQuestaoComAlternativaComponent } from './page/atualizar-questao-com-alternativa/atualizar-questao-com-alternativa.component';
import { AtualizarQuestaoComponent } from './page/atualizar-questao/atualizar-questao.component';
import { CadastrarQuestaoComProvaComponent } from './page/cadastrar-questao-com-prova/cadastrar-questao-com-prova.component';
import { CadastrarQuestaoComponent } from './page/cadastrar-questao/cadastrar-questao.component';
import { DeletarQuestaoComponent } from './page/deletar-questao/deletar-questao.component';
import { MuralQuestoesComponent } from './page/mural-questoes/mural-questoes.component';
import { SelecionarQuestoesComponent } from './page/selecionar-questoes/selecionar-questoes.component';

const routes: Routes = [
  {path: 'cadastrar-questao', component:CadastrarQuestaoComponent},
  {path: 'atualizar-questao/:id', component: AtualizarQuestaoComponent},
  {path: 'deletar-questao/:id', component: DeletarQuestaoComponent},
  {path: 'atualizar-questao-com-alternativa/:id/:id', component: AtualizarQuestaoComAlternativaComponent},
  {path: 'cadastrar-questao-com-prova', component: CadastrarQuestaoComProvaComponent},
  {path: 'mural-questoes', component:MuralQuestoesComponent},
  {path: 'selecionar-questoes', component:SelecionarQuestoesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestaoRoutingModule { }
