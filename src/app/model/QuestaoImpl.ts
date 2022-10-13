import { Alternativa } from "./Alternativa";
import { CategoriaQuestao } from "./CategoriaQuestao";
import { Questao } from "./Questao";
import { Usuario } from "./Usuario";

export class QuestaoImpl implements Questao {

   id!: number;
   instituicao!: string;
   ano!: Date | undefined;
   texto!: string;
   imagem!: string;
   alternativas: Alternativa[] = new Array();

   resposta!: Alternativa;
   categoria!: CategoriaQuestao;
   criador!: Usuario;


   // constructor(id: number, instituicao: string, ano: Date, texto: string, imagem: string,
   //     alternativas: Alternativa[], resposta: Alternativa, categoria: CategoriaQuestao, criador: Usuario) {
   //    this.id = id;
   //    this.instituicao = instituicao;
   //    this.ano = ano;
   //    this.texto = texto;
   //    this.imagem = imagem;
   //    this.alternativas = alternativas;
   //    this.resposta = resposta;
   //    this.categoria =categoria;
   //    this.criador = criador;
   // }

}