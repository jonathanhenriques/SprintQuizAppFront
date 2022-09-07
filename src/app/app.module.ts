import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { EntrarComponent } from './entrar/entrar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertaComponent } from './alerta/alerta.component';
import { NavegacaoBarComponent } from './navegacao-bar/navegacao-bar.component';
import { CriarComponent } from './criar/criar.component';
import { TokenInterceptorService } from './service/tokeninterceptorService.service';
import { QuizzComponent } from './quizz/quizz.component';
import { ToastrModule } from "ngx-toastr"


import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TesteComponent } from './teste/teste.component';
import { QuestaoModule } from './questao/questao.module';
import { ProvaModule } from './prova/prova.module';
import { AlternativaModule } from './alternativa/alternativa.module';
import { CategoriaQuestaoModule } from './categoria-questao/categoria-questao.module';
import { CategoriaProvaModule } from './categoria-prova/categoria-prova.module';
import { UsuarioModule } from './usuario/usuario.module';


@NgModule({
  declarations: [
    AppComponent,
    BoasVindasComponent,
    EntrarComponent,
    AlertaComponent,
    NavegacaoBarComponent,
    CriarComponent,
    QuizzComponent,

    TesteComponent,



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
    MatIconModule,
    MatDialogModule,

    QuestaoModule,
    ProvaModule,
    AlternativaModule,
    CategoriaQuestaoModule,
    CategoriaProvaModule,
    UsuarioModule


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
