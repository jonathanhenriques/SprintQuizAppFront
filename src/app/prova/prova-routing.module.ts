import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarProvaComponent } from './pages/atualizar-prova/atualizar-prova.component';
import { CadastrarProvaComponent } from './pages/cadastrar-prova/cadastrar-prova.component';
import { DeletarProvaComponent } from './pages/deletar-prova/deletar-prova.component';

const routes: Routes = [
  {path:'cadastrar-prova', component: CadastrarProvaComponent},
  {path:'atualizar-prova/:id', component: AtualizarProvaComponent},
  {path:'deletar-prova/:id', component: DeletarProvaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProvaRoutingModule { }
