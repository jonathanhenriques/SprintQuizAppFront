import { Prova } from "./Prova"
import { Questao } from "./Questao"

export class Usuario {

  public id!: number;
  public nome!: string;
  public usuario!: string;
  public senha!: string;
  public foto!: string;
  public tipo!: string;
  public questoes!: Questao[];
  public provas!: Prova[];

}
