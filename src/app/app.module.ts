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
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertaComponent } from './alerta/alerta.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { NavegacaoBarComponent } from './navegacao-bar/navegacao-bar.component';
import { AtualizarUsuarioComponent } from './atualizar-usuario/atualizar-usuario.component';
import { ProvaComponent } from './prova/prova.component';
import { CriarComponent } from './criar/criar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoasVindasComponent,
    EntrarComponent,
    CadastrarComponent,
    AlertaComponent,
    InicioComponent,
    NavegacaoBarComponent,
    AtualizarUsuarioComponent,
    ProvaComponent,
    CriarComponent
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
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
