import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastrarPacientesComponent } from './cadastrar-pacientes/cadastrar-pacientes.component';
import { PacienteRoutingModule } from './paciente-routing.module';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';
import { DetailsPacienteComponent } from './details-paciente/details-paciente.component';



@NgModule({
declarations: [CadastrarPacientesComponent, ListarPacientesComponent, DetailsPacienteComponent, ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    ReactiveFormsModule,

    MaterialModule,

    // SelectButtonModule,
    SharedModule,



  ],
  exports: []
})
export class PacienteModule { }
