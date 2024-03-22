import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './service/tokeninterceptorService.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { environment } from '../environments/environment';
import { BoasVindasModule } from './boas-vindas/boas-vindas.module';
import { EntrarModule } from './entrar/entrar.module';
import { NavegacaoBarModule } from './navegacao-bar/navegacao-bar.module';
import { SharedModule } from './shared/shared.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { appEffects, appReducer } from './store/app-state';


@NgModule({
  declarations: [AppComponent,],
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
      preventDuplicates: true,
    }),
    // RouterModule,
    FlexLayoutModule,
    SharedModule,
    NavegacaoBarModule,
    SidebarModule,
    BoasVindasModule,
    EntrarModule,



    //ngrx imports **************
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot(appReducer), //appReducer criado no app-state
    EffectsModule.forRoot(appEffects),
    //**************
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,

  ],

  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
