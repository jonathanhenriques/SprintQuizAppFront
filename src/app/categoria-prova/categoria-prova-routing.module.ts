import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarCategoriaProvaComponent } from './page/atualizar-categoria-prova/atualizar-categoria-prova.component';
import { CadastrarCategoriaProvaComponent } from './page/cadastrar-categoria-prova/cadastrar-categoria-prova.component';
import { DeletarCategoriaProvaComponent } from './page/deletar-categoria-prova/deletar-categoria-prova.component';

const routes: Routes = [
  {path: 'cadastrar-categoria-prova', component: CadastrarCategoriaProvaComponent},
  {path: 'atualizar-categoria-prova/:id', component: AtualizarCategoriaProvaComponent},
  {path: 'deletar-categoria-prova/:id', component: DeletarCategoriaProvaComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaProvaRoutingModule { }
