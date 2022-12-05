import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoasVindasComponent } from './boas-vindas.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [BoasVindasComponent],
  imports: [
    CommonModule,
    SharedModule
  ],exports: [BoasVindasComponent]
})
export class BoasVindasModule { }
