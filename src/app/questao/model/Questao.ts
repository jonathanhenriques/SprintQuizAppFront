import { Alternativa } from "src/app/alternativa/model/Alternativa";
import { CategoriaQuestao } from "src/app/categoria-questao/model/CategoriaQuestao";
import { Usuario } from "src/app/usuario/model/Usuario";

export interface Questao {

   id?: number;
   instituicao?: string;
   ano?: Date | undefined;
   texto?: string;
   imagem?: string;
   dificuldade?: number;
   alternativas?: Alternativa[];
   resposta?: Alternativa;
   categoria?: CategoriaQuestao;
   criador?: Usuario;
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
