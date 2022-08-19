import { InicioComponent } from './inicio/inicio.component';
import { CadastrarUsuarioComponent } from './cadastrar/cadastrar-usuario/cadastrar-usuario.component';
import { EntrarComponent } from './entrar/entrar.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarUsuarioComponent } from './atualizar/atualizar-usuario/atualizar-usuario.component';
import { CadastrarProvaComponent } from './cadastrar/cadastrar-prova/cadastrar-prova.component';
import { CriarComponent } from './criar/criar.component';
import { AtualizarCategoriaProvaComponent } from './atualizar/atualizar-categoria-prova/atualizar-categoria-prova.component';
import { CadastrarCategoriaProvaComponent } from './cadastrar/cadastrar-categoria-prova/cadastrar-categoria-prova.component';
import { DeletarCategoriaProvaComponent } from './deletar/deletar-categoria-prova/deletar-categoria-prova.component';

const routes: Routes = [

  { path: '', redirectTo: 'entrar', pathMatch: 'full' },

  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  { path: 'boas-vindas', component: BoasVindasComponent },
  { path: 'atualizar-usuario', component: AtualizarUsuarioComponent },
  { path: 'cadastrar-prova', component: CadastrarProvaComponent },
  { path: 'criar', component: CriarComponent },
  { path: 'cadastrar-categoria-prova', component: CadastrarCategoriaProvaComponent },
  { path: 'atualizar-categoria-prova', component: AtualizarCategoriaProvaComponent },
  { path: 'deletar-categoria-prova', component: DeletarCategoriaProvaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
