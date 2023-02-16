import { ModuleWithComponentFactories, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarUsuarioComponent } from './usuario/page/cadastrar-usuario/cadastrar-usuario.component';

const routes: Routes = [
    
  { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },
  { path: 'boas-vindas', component: BoasVindasComponent},
  { path: 'entrar', component: EntrarComponent},
  // { path: 'dashboard',component: DashboardComponent},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((module) => module.DashboardModule) },
  
  // { path: '', component: NavComponent, children:[
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then((module) => module.UsuarioModule) },
  { path: 'prova', loadChildren: () => import('./prova/prova.module').then((module) => module.ProvaModule)},
  { path: 'questao', loadChildren: () => import('./questao/questao.module').then((module) => module.QuestaoModule)}

  // children: [
  //   // { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },

  // ]
  // },
  // { path: '', loadChildren: () => import('./componentes/nav/nav.component').then((module) => module.NavComponent) },
  // ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
