import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarAlternativaComponent } from './page/atualizar-alternativa/atualizar-alternativa.component';
import { CadastrarAlternativaComponent } from './page/cadastrar-alternativa/cadastrar-alternativa.component';
import { DeletarAlternativaComponent } from './page/deletar-alternativa/deletar-alternativa.component';

const routes: Routes = [
  {path: ':id', component:AtualizarAlternativaComponent},
  {path: 'cadastrar-alternativa' ,component: CadastrarAlternativaComponent},
  {path: ':id/deletar-alternativa', component: DeletarAlternativaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlternativaRoutingModule { }
