import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsImportsModule } from '../materials-imports/materials-imports.module';
import { ComponentsModule } from '../componentes/components.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { BoasVindasComponent } from '../publico/boas-vindas/boas-vindas.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MuralProvasComponent } from './mural-provas/mural-provas.component';
import { MuralQuestoesComponent } from './mural-questoes/mural-questoes.component';
import { NavComponent } from './nav/nav.component';
import { PublicoRoutingModule } from './publico-routing.module';
import { QuizzComponent } from './quizz/quizz.component';
import { ResultadosComponent } from './resultados/resultados.component';


@NgModule({
  declarations: [
    NavComponent,
    EntrarComponent,
    BoasVindasComponent,

    AtualizarUsuarioComponent,
    CadastrarUsuarioComponent,

    MuralProvasComponent,
    MuralQuestoesComponent,

    QuizzComponent,
    ResultadosComponent,
  ],
  imports: [
    CommonModule,
    PublicoRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // SharedModule,
    ComponentsModule,
    UsuarioModule,
    MaterialsImportsModule,
  ],
  exports: [
  ]
})
export class PublicoModule { }