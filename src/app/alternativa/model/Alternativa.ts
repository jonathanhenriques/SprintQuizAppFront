import { Questao } from "src/app/questao/model/Questao";

// export class Alternativa {

//   public id: number;
//   public texto!: string;
//   public foto!: string;
//   public questao!: Questao;
// }


export interface Alternativa {

   id: number;
   texto: string;
   foto: string;
   questao: Questao;
   isResposta: boolean;
}

export function createAlternativa() : Alternativa {
  return {
    id: null,
    texto: '',
    foto: '',
    questao: null,
    isResposta: false,
  }
}
