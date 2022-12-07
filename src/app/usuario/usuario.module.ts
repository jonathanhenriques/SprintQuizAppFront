import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialsImportsModule } from '../shared/pages/materials-imports/materials-imports.module';
import { AtualizarUsuarioComponent } from './page/atualizar-usuario/atualizar-usuario.component';
import { CadastrarUsuarioComponent } from './page/cadastrar-usuario/cadastrar-usuario.component';
import { UsuarioComponent } from './page/usuario/usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [UsuarioComponent,CadastrarUsuarioComponent, AtualizarUsuarioComponent, UsuarioComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsuarioRoutingModule,
    MaterialsImportsModule
  ]
})
export class UsuarioModule { }
