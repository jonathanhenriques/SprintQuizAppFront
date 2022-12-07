import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaProvaRoutingModule } from './categoria-prova-routing.module';
import { FormsModule } from '@angular/forms';
import { AtualizarCategoriaProvaComponent } from './page/atualizar-categoria-prova/atualizar-categoria-prova.component';
import { CadastrarCategoriaProvaComponent } from './page/cadastrar-categoria-prova/cadastrar-categoria-prova.component';
import { DeletarCategoriaProvaComponent } from './page/deletar-categoria-prova/deletar-categoria-prova.component';
import { MaterialsImportsModule } from '../shared/pages/materials-imports/materials-imports.module';


@NgModule({
  declarations: [AtualizarCategoriaProvaComponent, CadastrarCategoriaProvaComponent, DeletarCategoriaProvaComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialsImportsModule,
    CategoriaProvaRoutingModule
  ]
})
export class CategoriaProvaModule { }
