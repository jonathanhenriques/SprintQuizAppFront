import { CategoriaProva } from './CategoriaProva';
import { Questao } from './Questao';
import { QuestaoProva } from './QuestaoProva';
import { Usuario } from './Usuario';


export class Prova {
  public id!: number
  public nome!: string
  public descricao!: string
  public duracao!: number
  public usuario!: Usuario
  public questoes!: QuestaoProva[]
  public instituicao!: string
  public categoria!: CategoriaProva
}

//construtor
