
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';

import { RemoverQuestaoProvaComponent } from './remover-questao-prova/remover-questao-prova.component';
import { MuralQuestoesComponent } from './mural-questoes/mural-questoes.component';

import { DeletarQuestaoComponent } from './deletar-questao/deletar-questao.component';
import { AtualizarQuestaoComponent } from './atualizar-questao/atualizar-questao.component';
import { CadastrarQuestaoComponent } from './cadastrar-questao/cadastrar-questao.component';
import { AtualizarQuestaoComAlternativaComponent } from './atualizar-questao-com-alternativa/atualizar-questao-com-alternativa.component';
import { SelecionarQuestoesComponent } from './selecionar-questoes/selecionar-questoes.component';
import { CadastrarQuestaoComProvaComponent } from './cadastrar-questao-com-prova/cadastrar-questao-com-prova.component';



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
      preventDuplicates: true
    }
     
    ),
    

    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
    
  ],

  declarations: [
    RemoverQuestaoProvaComponent,
    MuralQuestoesComponent,
    DeletarQuestaoComponent,
    AtualizarQuestaoComponent,
    CadastrarQuestaoComponent,
    AtualizarQuestaoComAlternativaComponent,
    SelecionarQuestoesComponent,
    CadastrarQuestaoComProvaComponent,
    CadastrarQuestaoComponent,
    
  ],
  
  exports: [

  ]
})
export class QuestaoModule { }
