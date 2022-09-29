import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './entrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../mensagem/mensagem.module';
import { EntrarRoutingModule } from './entrar-routing.module';



@NgModule({
  declarations: [
    EntrarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MensagemModule,
    EntrarRoutingModule,

  ],exports: [EntrarComponent]
})
export class EntrarModule { }
