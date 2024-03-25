import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoasVindasComponent } from './boas-vindas.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BoasVindasComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],exports: [BoasVindasComponent]
})
export class BoasVindasModule { }
