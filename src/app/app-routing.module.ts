import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    
  // { path: '', component: NavComponent, children:[
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./componentes/usuario/usuario.module').then((module) => module.UsuarioModule) },
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
