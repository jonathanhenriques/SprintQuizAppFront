import { PacienteED } from "./PacienteED";

export class ExameED {
  public id: number;
  public nomeExame: string;
  public medico: string;
  public local: string;
  public paciente: PacienteED | null;
  public dataExame: Date;
  public valor: number;
  public observacao: string;

  constructor() {
    this.id = 0;
    this.nomeExame = '';
    this.medico = '';
    this.local = '';
    this.paciente = null;
    this.dataExame = new Date();
    this.valor = 0;
    this.observacao = '';
  }


}

export function criaExameComPaciente(paciente: PacienteED): ExameED {
  return {
  id: 0,
  nomeExame: '',
  medico: paciente.medicoAtendente[0],
  local: paciente.local[0],
  paciente:  paciente,
  dataExame: new Date(),
  valor: 0,
  observacao: ''

  }
}
