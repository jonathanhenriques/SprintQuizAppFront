import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacaoBarComponent } from './navegacao-bar.component';
import { RouterModule } from '@angular/router';
import { NavegacaoBarRoutingModule } from './navegacao-bar-routing.module';



@NgModule({
  declarations: [NavegacaoBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavegacaoBarRoutingModule,
      
  ],exports:[NavegacaoBarComponent]
})
export class NavegacaoBarModule { }
