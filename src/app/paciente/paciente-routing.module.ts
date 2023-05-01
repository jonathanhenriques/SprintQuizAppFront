import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarPacientesComponent } from './cadastrar-pacientes/cadastrar-pacientes.component';
import { ListarPacientesComponent } from './listar-pacientes/listar-pacientes.component';



const routes: Routes = [
  { path: 'cadastrar', component: CadastrarPacientesComponent  },
  { path: 'listar', component: ListarPacientesComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
