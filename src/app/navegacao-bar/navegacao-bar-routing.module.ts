import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'usuario', loadChildren: () => import('../usuario/usuario.module').then((module) => module.UsuarioModule) },
  { path: 'prova', loadChildren: () => import('../prova/prova.module').then((module) => module.ProvaModule)},
  { path: 'questao', loadChildren: () => import('../questao/questao.module').then((module) => module.QuestaoModule)},
  { path: 'categoria-prova', loadChildren: () => import('../categoria-prova/categoria-prova.module').then((module) => module.CategoriaProvaModule) },
  { path: 'categoria-questao', loadChildren: () => import('../categoria-questao/categoria-questao.module').then((module) => module.CategoriaQuestaoModule)}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavegacaoBarRoutingModule { }
