import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaQuestaoRoutingModule } from './categoria-questao-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarCategoriaQuestaoComponent } from './page/cadastrar-categoria-questao/cadastrar-categoria-questao.component';
import { AtualizarCategoriaQuestaoComponent } from './page/atualizar-categoria-questao/atualizar-categoria-questao.component';
import { DeletarCategoriaQuestaoComponent } from './page/deletar-categoria-questao/deletar-categoria-questao.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CadastrarCategoriaQuestaoComponent, AtualizarCategoriaQuestaoComponent, DeletarCategoriaQuestaoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CategoriaQuestaoRoutingModule
  ]
})
export class CategoriaQuestaoModule { }
