import { Alternativa } from "./Alternativa";
import { CategoriaQuestao } from "./CategoriaQuestao";
import { Usuario } from "./Usuario";

export interface Questao {

   id: number;
   instituicao: string;
   ano: Date | undefined;
   texto: string;
   imagem: string;
   dificuldade?: number;
   alternativas: Alternativa[];
   resposta: Alternativa;
   categoria: CategoriaQuestao;
   criador: Usuario;
}

export function createQuestao(): Questao {
   return {
      id: null,
      instituicao: '',
      ano: null,
      texto: '',
      imagem: '',
      dificuldade: null,
      alternativas: null,
      resposta: null,
      categoria: null,
      criador: null
   }
}