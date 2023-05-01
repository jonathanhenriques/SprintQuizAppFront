import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem/mensagem.component';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    MensagemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MensagemComponent,
    
  ]
})
export class SharedModule { }
