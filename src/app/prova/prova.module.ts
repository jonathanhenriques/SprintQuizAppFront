import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvaRoutingModule } from './prova-routing.module';
import { CadastrarProvaComponent } from './pages/cadastrar-prova/cadastrar-prova.component';
import { AtualizarProvaComponent } from './pages/atualizar-prova/atualizar-prova.component';
import { DeletarProvaComponent } from './pages/deletar-prova/deletar-prova.component';
import { GaleriaProvasComponent } from './pages/galeriaprovas/galeria-provas.component';
import { MuralProvasComponent } from './pages/mural-provas/mural-provas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CadastrarProvaComponent, AtualizarProvaComponent, DeletarProvaComponent,GaleriaProvasComponent,MuralProvasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProvaRoutingModule
  ]
})
export class ProvaModule { }
