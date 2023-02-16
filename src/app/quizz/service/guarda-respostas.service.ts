import { Injectable } from '@angular/core';

interface Respostas {
  // name: string; - categoria da questao talvez
  value: number;
}

@Injectable({
  providedIn: 'root'
})
export class GuardaRespostasService {

  static listaRespostas: number[] = [];
  constructor() { }




  private data = [
    {
      // "name": "Português",
      "value": 25
    },
    {
      // "name": "Matemática",
      "value": 25
    },
    {
      // "name": "Física",
      "value": 25
    },
    {
      // "name": "Química",
      "value": 25
    }
  ];


  // get respostasData() {

  //   for (var value of GuardaRespostasService.listaRespostas) {
  //     this.data.push(GuardaRespostasService.listaRespostas[0])
  //   }


  //   return this.data;
  // }
}


