import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
    
  { path: '', redirectTo: 'boas-vindas', pathMatch: 'full' },
  {path: 'boas-vindas', component: BoasVindasComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'dashboard',component: DashboardComponent},
  
  // { path: '', component: NavComponent, children:[
  // { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '', loadChildren: () => import('./usuario/usuario.module').then((module) => module.UsuarioModule) },
  // { path: '', redirectTo: '', pathMatch: 'full' },

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
