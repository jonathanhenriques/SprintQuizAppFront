import { NavbarComponent } from './navbar/navbar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // { path: '', redirectTo: 'entrar' , pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent }

  // { path: 'entrar', component: EntrarComponent },
  // { path: 'cadastrar', component: CadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
