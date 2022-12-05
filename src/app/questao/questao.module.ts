import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestaoRoutingModule } from './questao-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CadastrarQuestaoComponent } from './page/cadastrar-questao/cadastrar-questao.component';
import { AtualizarQuestaoComponent } from './page/atualizar-questao/atualizar-questao.component';
import { AtualizarQuestaoComAlternativaComponent } from './page/atualizar-questao-com-alternativa/atualizar-questao-com-alternativa.component';
import { CadastrarQuestaoComProvaComponent } from './page/cadastrar-questao-com-prova/cadastrar-questao-com-prova.component';
import { DeletarQuestaoComponent } from './page/deletar-questao/deletar-questao.component';
import { MuralQuestoesComponent } from './page/mural-questoes/mural-questoes.component';
import { SelecionarQuestoesComponent } from './page/selecionar-questoes/selecionar-questoes.component';


@NgModule({
  declarations: [
    CadastrarQuestaoComponent,
    AtualizarQuestaoComponent,
    AtualizarQuestaoComAlternativaComponent,
    CadastrarQuestaoComProvaComponent,
    DeletarQuestaoComponent,
    MuralQuestoesComponent,
    SelecionarQuestoesComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    QuestaoRoutingModule
  ]
})
export class QuestaoModule { }
