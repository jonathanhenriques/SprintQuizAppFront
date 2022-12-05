import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './entrar.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EntrarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],exports:[EntrarComponent]
})
export class EntrarModule { }
