import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33 ],
    ['Fevereiro', 68 ],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['JUnho', 27 ],
  ];

  constructor() { }

  // @return Observable<any>

  obterDados(): Observable<any> { // retorna um observable construído
    return new Observable(observable => {
      observable.next(this.dados); //notifica os inscritos desse observable, ou seja, retorna os dados
      observable.complete(); // finaliza o observable, a escuta
    });
  }
}
