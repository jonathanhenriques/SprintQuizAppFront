import { QuestaoProva } from 'src/app/questao-prova/model/QuestaoProva';
import { Usuario } from 'src/app/usuario/model/Usuario';
import { CategoriaProva } from 'src/app/categoria-prova/model/CategoriaProva';


export class Prova {
  public id?: number;
  public nome: string
  public descricao: string
  public duracao: number
  public usuario: Usuario
  public questoes: QuestaoProva[]
  public instituicao: string
  public categoria: CategoriaProva

  //construtor
  constructor(
    nome: string, descricao: string, duracao: number, usuario: Usuario,
    questoes: QuestaoProva[], instituicao: string, categoria: CategoriaProva) {
    this.nome = nome;
    this.descricao = descricao;
    this.duracao = duracao;
    this.usuario = usuario;
    this.questoes = questoes;
    this.instituicao = instituicao;
    this.categoria = categoria;
  }

  // public id!: number;
  // public nome!: string
  // public descricao!: string
  // public duracao!: number
  // public usuario!: Usuario
  // public questoes!: QuestaoProva[]
  // public instituicao!: string
  // public categoria!: CategoriaProva


}


