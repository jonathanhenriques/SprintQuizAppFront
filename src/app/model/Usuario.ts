import { Prova } from "./Prova"
import { Questao } from "./Questao"



export interface Usuario {

   id: number;
   nome: string;
   usuario: string;
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
    usuario: '',
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
