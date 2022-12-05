import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzComponent } from './pages/quizz/quizz.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [QuizzComponent, ResultadosComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ResultadosComponent]
})
export class QuizzModule { }
