import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { EntrarModule } from '../entrar/entrar.module';
import { MaterialModule } from '../material/material.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NavegacaoBarComponent } from './navegacao-bar/navegacao-bar.component';
import { NavRoutingModule } from './nav-routing.module';



@NgModule({
  declarations: [
    NavComponent,
    NavegacaoBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatSidenavModule,
    RouterModule,
    NavRoutingModule,

    EntrarModule,
  ], exports: [
    NavComponent,
    MatSidenavModule,
    NavegacaoBarComponent,
  ]
})
export class NavModule { }
