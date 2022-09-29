import { Alternativa } from "./Alternativa";
import { CategoriaQuestao } from "./CategoriaQuestao";
import { Usuario } from "./Usuario";

export interface Questao{
    
   id: number;
   instituicao: string;
   ano: Date | undefined;
   texto: string;
   imagem: string;
   alternativas: Alternativa[];
   resposta: Alternativa;
   categoria: CategoriaQuestao;
   criador: Usuario;
}