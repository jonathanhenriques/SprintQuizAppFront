import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../../app-routing.module';
import { AtualizarAlternativaComponent } from './atualizar-alternativa/atualizar-alternativa.component';
import { CadastrarAlternativaComponent } from './cadastrar-alternativa/cadastrar-alternativa.component';
import { DeletarAlternativaComponent } from './deletar-alternativa/deletar-alternativa.component';
import { RemoverAlternativaDaQuestaoComponent } from './remover-alternativa-da-questao/remover-alternativa-da-questao.component';



@NgModule({
  declarations: [
    CadastrarAlternativaComponent,
    AtualizarAlternativaComponent,
    DeletarAlternativaComponent,
    RemoverAlternativaDaQuestaoComponent,
  ],
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
  ]
})
export class AlternativaModule { }
