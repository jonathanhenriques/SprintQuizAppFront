import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Questao } from '../model/Questao';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByIdQuestao(id: number):Observable<Questao>{
    return this.http.get<Questao>(`https://sprintquiz.herokuapp.com/questoes/${id}`, this.token);
  }

  getAllQuestao():Observable<Questao[]>{
    return this.http.get<Questao[]>('https://sprintquiz.herokuapp.com/questoes', this.token);
  }

  getByTextoQuestao(texto: string):Observable<Questao[]>{
    return this.http.get<Questao[]>(`https://sprintquiz.herokuapp.com/questoes/texto/${texto}`, this.token);
  }

  getByInstituicaoQuestao(instituicao: string):Observable<Questao[]>{
    return this.http.get<Questao[]>(`https://sprintquiz.herokuapp.com/questoes/instituicao/${instituicao}`, this.token);
  }

  getByAnoQuestao(ano: Date):Observable<Questao[]>{
    return this.http.get<Questao[]>(`https://sprintquiz.herokuapp.com/questoes/ano/${ano}`, this.token);
  }

  getByAnoEntreInicialFinalQuestao(anoInicial: Date, anoFinal: Date):Observable<Questao[]>{
    return this.http.get<Questao[]>(`https://sprintquiz.herokuapp.com/questoes/ano/${anoInicial}/${anoFinal}`, this.token);
  }

  getByAnoAnteriorQuestao(ano: Date):Observable<Questao[]>{
    return this.http.get<Questao[]>(`https://sprintquiz.herokuapp.com/questoes/ano/${ano}`, this.token);
  }

  postQuestao(questao:Questao):Observable<Questao>{
    return this.http.post<Questao>('https://sprintquiz.herokuapp.com/questoes', questao, this.token);
  }

  putQuestao(questao:Questao):Observable<Questao>{
    return this.http.put<Questao>('https://sprintquiz.herokuapp.com/questoes', questao, this.token);
  }

  deleteQuestao(id: number){
    return this.http.delete<Questao>(`https://sprintquiz.herokuapp.com/questoes/${id}`, this.token);
  }
}
