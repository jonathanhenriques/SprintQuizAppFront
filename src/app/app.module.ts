import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarUsuarioComponent } from './cadastrar/cadastrarUsuario/cadastrar-usuario.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertaComponent } from './alerta/alerta.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { NavegacaoBarComponent } from './navegacao-bar/navegacao-bar.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { ProvaComponent } from './prova/prova.component';
import { CriarComponent } from './criar/criar.component';
import { DeletarCategoriaProvaComponent } from './deletar/categoria-prova/deletar-categoria-prova.component';
import { CadastrarCategoriaProvaComponent } from './cadastrar/cadastrar-categoria-prova/cadastrar-categoria-prova.component';
import { AtualizarCategoriaProvaComponent } from './atualizar/atualizar-categoria-prova/atualizar-categoria-prova.component';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    BoasVindasComponent,
    EntrarComponent,
    CadastrarUsuarioComponent,
    AlertaComponent,
    InicioComponent,
    NavegacaoBarComponent,
    AtualizarUsuarioComponent,
    ProvaComponent,
    CriarComponent,
    DeletarCategoriaProvaComponent,
    CadastrarCategoriaProvaComponent,
    AtualizarCategoriaProvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
