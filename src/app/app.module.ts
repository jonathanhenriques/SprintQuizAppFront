import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarUsuarioComponent } from './cadastrar/cadastrar-usuario/cadastrar-usuario.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertaComponent } from './alerta/alerta.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavegacaoBarComponent } from './navegacao-bar/navegacao-bar.component';
import { AtualizarUsuarioComponent } from './atualizar/atualizar-usuario/atualizar-usuario.component';
import { CadastrarProvaComponent } from './cadastrar/cadastrar-prova/cadastrar-prova.component';
import { CriarComponent } from './criar/criar.component';
import { DeletarCategoriaProvaComponent } from './deletar/deletar-categoria-prova/deletar-categoria-prova.component';
import { CadastrarCategoriaProvaComponent } from './cadastrar/cadastrar-categoria-prova/cadastrar-categoria-prova.component';
import { AtualizarCategoriaProvaComponent } from './atualizar/atualizar-categoria-prova/atualizar-categoria-prova.component';

import { CadastrarQuestaoComponent } from './cadastrar/cadastrar-questao/cadastrar-questao.component';
import { CadastrarAlternativaComponent } from './cadastrar/cadastrar-alternativa/cadastrar-alternativa.component';
import { CadastrarCategoriaQuestaoComponent } from './cadastrar/cadastrar-categoria-questao/cadastrar-categoria-questao.component';
import { AtualizarQuestaoComponent } from './atualizar/atualizar-questao/atualizar-questao.component';
import { AtualizarProvaComponent } from './atualizar/atualizar-prova/atualizar-prova.component';
import { AtualizarCategoriaQuestaoComponent } from './atualizar/atualizar-categoria-questao/atualizar-categoria-questao.component';
import { AtualizarAlternativaComponent } from './atualizar/atualizar-alternativa/atualizar-alternativa.component';
import { DeletarCategoriaQuestaoComponent } from './deletar/deletar-categoria-questao/deletar-categoria-questao.component';
import { DeletarUsuarioComponent } from './deletar/deletar-usuario/deletar-usuario.component';
import { DeletarAlternativaComponent } from './deletar/deletar-alternativa/deletar-alternativa.component';
import { DeletarQuestaoComponent } from './deletar/deletar-questao/deletar-questao.component';
import { DeletarProvaComponent } from './deletar/deletar-prova/deletar-prova.component';
import { MuralQuestoesComponent } from './mural/mural-questoes/mural-questoes.component';
import { MuralProvasComponent } from './mural/mural-provas/mural-provas.component';
import { TokenInterceptorService } from './service/tokeninterceptorService.service';
import { AtualizarQuestaoComAlternativaComponent } from './atualizar/atualizar-questao-com-alternativa/atualizar-questao-com-alternativa.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ToastrModule } from "ngx-toastr"


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { timeout } from 'rxjs';
import { GaleriaQuestoesComponent } from './galerias/galeriaquestoes/galeria-questoes.component';
import { GaleriaProvasComponent } from './galerias/galeriaprovas/galeria-provas.component';


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
    CadastrarProvaComponent,
    CriarComponent,
    DeletarCategoriaProvaComponent,
    CadastrarCategoriaProvaComponent,
    AtualizarCategoriaProvaComponent,
    CadastrarQuestaoComponent,
    CadastrarAlternativaComponent,
    CadastrarCategoriaQuestaoComponent,
    AtualizarQuestaoComponent,
    AtualizarProvaComponent,
    AtualizarCategoriaQuestaoComponent,
    AtualizarAlternativaComponent,
    DeletarCategoriaQuestaoComponent,
    DeletarUsuarioComponent,
    DeletarAlternativaComponent,
    DeletarQuestaoComponent,
    DeletarProvaComponent,
    MuralProvasComponent,
    MuralQuestoesComponent,
    AtualizarQuestaoComAlternativaComponent,
    QuizzComponent,
    GaleriaQuestoesComponent,
    GaleriaProvasComponent,
    
  ],
  imports: [
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
    MatIconModule
    

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
