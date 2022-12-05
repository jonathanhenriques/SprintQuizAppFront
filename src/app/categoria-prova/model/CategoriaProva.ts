import { Prova } from "src/app/prova/model/Prova"

export interface CategoriaProva {
   id: number
   titulo: string
   descricao: string
   provas: Prova[]
}

export function createCategoriaProva(): CategoriaProva {
  return {
    id: null,
    titulo: '',
    descricao: '',
    provas: null
  }
}



// export class CategoriaProva {
//   public id!: number
//   public titulo!: string
//   public descricao!: string
//   public provas!: Prova[]
// }