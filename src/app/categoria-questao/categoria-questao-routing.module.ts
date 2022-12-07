import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarCategoriaQuestaoComponent } from './page/atualizar-categoria-questao/atualizar-categoria-questao.component';
import { CadastrarCategoriaQuestaoComponent } from './page/cadastrar-categoria-questao/cadastrar-categoria-questao.component';
import { DeletarCategoriaQuestaoComponent } from './page/deletar-categoria-questao/deletar-categoria-questao.component';

const routes: Routes = [
  {path: 'cadastrar-categoria-questao', component: CadastrarCategoriaQuestaoComponent},
  {path: 'atualizar-categoria-questao/:id', component: AtualizarCategoriaQuestaoComponent},
  {path: 'deletar-categoria-questao/:id', component: DeletarCategoriaQuestaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaQuestaoRoutingModule { }
