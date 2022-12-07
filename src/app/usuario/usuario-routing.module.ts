import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarUsuarioComponent } from './page/atualizar-usuario/atualizar-usuario.component';
import { CadastrarUsuarioComponent } from './page/cadastrar-usuario/cadastrar-usuario.component';
import { UsuarioComponent } from './page/usuario/usuario.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full'},
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  { path: 'atualizar-usuario', component: AtualizarUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
