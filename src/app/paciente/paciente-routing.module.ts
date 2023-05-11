import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarPacientesComponent } from './cadastrar-pacientes/cadastrar-pacientes.component';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';
import { DetailsPacienteComponent } from './details-paciente/details-paciente.component';



const routes: Routes = [
  { path: 'cadastrar', component: CadastrarPacientesComponent  },
  { path: 'listar', component: ListarPacientesComponent  },
  { path: 'detalhe-paciente/:id', component: DetailsPacienteComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
