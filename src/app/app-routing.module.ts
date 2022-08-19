import { InicioComponent } from './inicio/inicio.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { ProvaComponent } from './prova/prova.component';
import { CriarComponent } from './criar/criar.component';

const routes: Routes = [

  { path: '', redirectTo: 'entrar', pathMatch: 'full' },

  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'boas-vindas', component: BoasVindasComponent },
  { path: 'atualizar-usuario', component: AtualizarUsuarioComponent },
  { path: 'prova', component: ProvaComponent },
  { path: 'criar', component: CriarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
