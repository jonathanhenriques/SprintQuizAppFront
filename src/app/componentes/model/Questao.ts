import { Alternativa } from "./Alternativa";
import { CategoriaQuestao } from "./CategoriaQuestao"
import { Usuario } from "./Usuario"

export class Questao{

  public id: number;
  public instituicao: string;
  public ano: Date;
  public texto: string;
  public imagem: string;
  // public opcao_1: string;
  // public opcao_2: string;
  // public opcao_3: string;
  // public opcao_4: string;
  // public opcao_5: string;
  public alternativas: Alternativa[];
  public resposta: Alternativa;
  public categoria: CategoriaQuestao;
  public criador: Usuario;


}
