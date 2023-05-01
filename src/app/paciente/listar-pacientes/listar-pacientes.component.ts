import { PacientesService } from 'src/app/services/pacientes.service';
import { Component, OnInit } from '@angular/core';
import { PacienteED } from 'src/app/models/PacienteED';



@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.scss'],
})
export class ListarPacientesComponent implements OnInit {

  private paciente: PacienteED = new PacienteED();

  public pacientes: PacienteED[] = [];



  constructor(private pacientesService: PacientesService) {

    this.paciente.nome = 'teste';
    this.paciente.contato.email = 'testeEmail';
    this.paciente.contato.telefone = 'testeTelefone';
    this.pacientes.push(this.paciente);
  }

  ngOnInit(): void {
    this.listarPacientes();
  }

  listarPacientes(): void {
    this.pacientesService
      .getAllPacientesAtivos(true)
      .subscribe((dataPacientes: PacienteED[]) => {
        this.pacientes = dataPacientes;
      });
  }
}
