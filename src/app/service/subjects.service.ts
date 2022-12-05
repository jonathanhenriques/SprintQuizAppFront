import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  public ocultarMenuHeader = new Subject<any>();
  public reload = new Subject<any>();
  public limparData = new Subject<any>();
  public bloqueio = new Subject<any>();

  constructor() { 
  }
}

//DESCOBRIR POR QUE CRIEI ISSO
