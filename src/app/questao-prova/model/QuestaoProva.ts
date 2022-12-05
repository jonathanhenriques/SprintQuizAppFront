import { Prova } from 'src/app/prova/model/Prova';
import { Questao } from 'src/app/questao/model/Questao';



export interface QuestaoProva {

   id: number;
   questao: Questao;
   prova: Prova;
}

export function createQuestaoProva(): QuestaoProva{
  return {
    id: null,
    questao: null,
    prova: null
  }
}


// export class QuestaoProva {

//   public id!: number;
//   public questao!: Questao;
//   public prova!: Prova;
// }
