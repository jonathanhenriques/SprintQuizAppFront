import { PacientesService } from 'src/app/services/pacientes.service';
import { Component, OnInit } from '@angular/core';
import { PacienteED } from 'src/app/models/PacienteED';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.scss'],
})
export class ListarPacientesComponent implements OnInit {

  private paciente: PacienteED = new PacienteED();

  public pacientes: PacienteED[] = [];


  displayedColumns: string[] = ['nome', 'RG', 'dataNasc', 'idade', 'contato', 'apagar'];
  dataSource: MatTableDataSource<any>

  constructor(private pacientesService: PacientesService) {}

  ngOnInit(): void {

    this.listarPacientes();
  }

  listarPacientes(): void {
    this.pacientesService
    .getAllPacientes()
    .subscribe((dataPacientes: PacienteED[]) => {
      this.pacientes = dataPacientes;
      this.dataSource = new MatTableDataSource(dataPacientes)
    });
  }

  listarPacientesAtivos(): void {
    this.pacientesService
    .getAllPacientesAtivos(true)
    .subscribe((dataPacientes: PacienteED[]) => {
      this.pacientes = dataPacientes;
      });
  }

  applyFilter(event: Event) {
    // const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = (event.target as HTMLInputElement).value?.trim().toLowerCase();
  }

}

