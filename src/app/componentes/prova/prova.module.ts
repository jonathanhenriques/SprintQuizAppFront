import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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


import { CadastrarProvaComponent } from './cadastrar-prova/cadastrar-prova.component';
import { AtualizarProvaComponent } from './atualizar-prova/atualizar-prova.component';
import { DeletarProvaComponent } from './deletar-prova/deletar-prova.component';
import { GaleriaProvasComponent } from './galeriaprovas/galeria-provas.component';
import { MuralProvasComponent } from './mural-provas/mural-provas.component';
import { QuestaoModule } from '../questao/questao.module';
import { MuralSprintsComponent } from './mural-sprints/mural-sprints.component';



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
    MatDialogModule,
    QuestaoModule

    
  ],
  declarations: [
    CadastrarProvaComponent,
    AtualizarProvaComponent,
    DeletarProvaComponent,
    MuralProvasComponent,
    GaleriaProvasComponent,
    MuralSprintsComponent,
  ],
  
})
export class ProvaModule { }
