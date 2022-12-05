import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacaoBarComponent } from './navegacao-bar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NavegacaoBarComponent],
  imports: [
    CommonModule,
    RouterModule,
      
  ],exports:[NavegacaoBarComponent]
})
export class NavegacaoBarModule { }
