import { CategoriaProva } from './CategoriaProva';
import { Questao } from './Questao';
import { QuestaoProva } from './QuestaoProva';
import { Usuario } from './Usuario';


export class Prova {
  public id;
  // public id!: number
  // public nome!: string
  // public descricao!: string
  // public duracao!: number
  // public usuario!: Usuario
  // public questoes!: QuestaoProva[]
  // public instituicao!: string
  // public categoria!: CategoriaProva

  //construtor
  constructor(
    id: number, nome: String, descricao: String, duracao: number, usuario: Usuario,
     questoes: QuestaoProva[], instituicao: String, categoria: String) {
    this.id = id;
  }


}


