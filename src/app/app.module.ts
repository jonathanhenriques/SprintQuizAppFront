import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoasVindasComponent } from './componentes/boas-vindas/boas-vindas.component';
import { EntrarComponent } from './componentes/entrar/entrar.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertaComponent } from './componentes/alerta/alerta.component';
import { NavegacaoBarComponent } from './componentes/navegacao-bar/navegacao-bar.component';
import { TokenInterceptorService } from './service/tokeninterceptorService.service';
import { QuizzComponent } from './componentes/quizz/quizz.component';
import { ToastrModule } from "ngx-toastr"




import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TesteComponent } from './teste/teste.component';
import { QuestaoModule } from './componentes/questao/questao.module';
import { ProvaModule } from './componentes/prova/prova.module';
import { AlternativaModule } from './componentes/alternativa/alternativa.module';
import { CategoriaQuestaoModule } from './componentes/categoria-questao/categoria-questao.module';
import { CategoriaProvaModule } from './componentes/categoria-prova/categoria-prova.module';
import { UsuarioModule } from './componentes/usuario/usuario.module';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './componentes/home/home.component';
import { ResultadosComponent } from './componentes/resultados/resultados.component';
import { MaterialModule } from './componentes/material/material.module';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { GraficosModule } from './componentes/graficos/graficos.module';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartsComponent } from './componentes/charts/charts.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    BoasVindasComponent,
    EntrarComponent,
    AlertaComponent,
    NavegacaoBarComponent,
    QuizzComponent,

    TesteComponent,
    NavComponent,
    HomeComponent,
    ResultadosComponent,
    DashboardComponent,
    ChartsComponent,



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
    NgxChartsModule,
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
    MatSnackBarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatRadioModule,
    MatListModule,
    MatCardModule,

    QuestaoModule,
    ProvaModule,
    AlternativaModule,
    CategoriaQuestaoModule,
    CategoriaProvaModule,
    UsuarioModule,
    MaterialModule,
    GraficosModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })


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
