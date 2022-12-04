import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from '../componentes/nav/nav.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MuralProvasComponent } from './mural-provas/mural-provas.component';
import { MuralQuestoesComponent } from './mural-questoes/mural-questoes.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [

  { path: '', component: NavComponent, children:[

  { path: 'entrar', component: EntrarComponent },
  { path: 'boas-vindas', component: BoasVindasComponent},

  { path: 'atualizar-usuario/:id', component: AtualizarUsuarioComponent },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },

  { path: 'mural-provas', component: MuralProvasComponent },
  { path: 'mural-questoes', component: MuralQuestoesComponent },

  { path: 'quizz/:id', component: QuizzComponent },
  { path: 'resultados/:id', component: ResultadosComponent },
  // { path: 'resultados', component: ResultadosComponent }

     // { path: '', loadChildren: () => import('./componentes/nav/nav.component').then((module) => module.NavComponent) },

  { path: 'cadastrar-categoria-prova',
   loadChildren: () => import('../usuario/usuario.module').then((module) => module.UsuarioModule),
     }


  ]}

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }
