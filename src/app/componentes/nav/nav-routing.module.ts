import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './nav.component';
import { ComponentLoader } from 'ngx-bootstrap/component-loader';

const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '' , component: NavComponent,
  // {path: 'entrar', loadChildren: () => import("../entrar/entrar.module").then((module) => module.EntrarModule)}
  children: [
    {path: 'entrar', loadChildren: () => import("../entrar/entrar.module").then((module) => module.EntrarModule)},
    { path: 'cadastrar-usuario', loadChildren: () => import('../usuario/usuario.module').then((component)=> component.UsuarioModule) }
    
  ]
 }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
