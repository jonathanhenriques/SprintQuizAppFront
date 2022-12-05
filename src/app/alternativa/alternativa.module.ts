import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlternativaRoutingModule } from './alternativa-routing.module';
import { AtualizarAlternativaComponent } from './page/atualizar-alternativa/atualizar-alternativa.component';
import { CadastrarAlternativaComponent } from './page/cadastrar-alternativa/cadastrar-alternativa.component';
import { RemoverAlternativaDaQuestaoComponent } from './page/remover-alternativa-da-questao/remover-alternativa-da-questao.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AtualizarAlternativaComponent, CadastrarAlternativaComponent, RemoverAlternativaDaQuestaoComponent],
  imports: [
    CommonModule,
    //ngModel, input.....
    FormsModule, 
    
    AlternativaRoutingModule
  ]
})
export class AlternativaModule { }
