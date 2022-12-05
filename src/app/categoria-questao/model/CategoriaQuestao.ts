import { Questao } from "src/app/questao/model/Questao"

// export class CategoriaQuestao {
//   public id?: number
//   public titulo!: string
//   public descricao!: string
//   public questoes!: Questao[]
// }


export interface CategoriaQuestao {
   id: number
   titulo: string
   descricao: string
   questoes: Questao[]
}

export function createCategoriaQuestao(): CategoriaQuestao {
  return {
    id: null,
    titulo: '',
    descricao: '',
    questoes: null
  }
}
