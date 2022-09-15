import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraficosComponent } from './graficos.component';
import { DadosService } from 'src/app/service/dados.service';



@NgModule({
  declarations: [
    GraficosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GraficosComponent
  ],
  providers: [
    DadosService
  ]
})
export class GraficosModule { }
