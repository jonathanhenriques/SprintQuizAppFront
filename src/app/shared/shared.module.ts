import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertaComponent } from './pages/alerta/alerta.component';
import { MaterialsImportsModule } from './pages/materials-imports/materials-imports.module';
import { MensagemComponent } from './pages/mensagem/mensagem.component';



@NgModule({
  declarations: [AlertaComponent, MensagemComponent],
  imports: [
    CommonModule
  ], exports: [AlertaComponent, MaterialsImportsModule, MensagemComponent]
})
export class SharedModule { }
