import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { FormsModule } from '@angular/forms';
import { CadastrarUsuarioComponent } from './page/cadastrar-usuario/cadastrar-usuario.component';
import { AtualizarUsuarioComponent } from './page/atualizar-usuario/atualizar-usuario.component';


@NgModule({
  declarations: [CadastrarUsuarioComponent, AtualizarUsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
