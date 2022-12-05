import { Prova } from "src/app/prova/model/Prova";
import { Questao } from "src/app/questao/model/Questao";



export interface Usuario {

   id: number;
   nome: string;
   email: string;
   senha: string;
   foto: string;
   tipo: string;
   questoes: Questao[];
   provas: Prova[];

}

export function createUsuario(): Usuario {
  return {
    id: null,
    nome: '',
    email: '',
    senha: '',
    foto: '',
    tipo: '',
    questoes: null,
    provas: null
  }
}








// export class Usuario {

//   public id!: number;
//   public nome!: string;
//   public usuario!: string;
//   public senha!: string;
//   public foto!: string;
//   public tipo!: string;
//   public questoes!: Questao[];
//   public provas!: Prova[];

// }
