import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Questao } from '../componentes/model/Questao';

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


  // url: string = 'https://sprintquiz.herokuapp.com';
  // url: string = 'http://localhost:8081';
  url = environment.url;

  getByIdQuestao(id: number):Observable<Questao>{
    return this.http.get<Questao>(this.url + `/questoes/${id}`, this.token);
  }

  getAllQuestao():Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + '/questoes', this.token);
  }

  getByTextoQuestao(texto: string):Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + `/questoes/texto/${texto}`, this.token);
  }

  getByInstituicaoQuestao(instituicao: string):Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + `/questoes/instituicao/${instituicao}`, this.token);
  }

  getByAnoQuestao(ano: Date):Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + `/questoes/ano/${ano}`, this.token);
  }

  getByAnoEntreInicialFinalQuestao(anoInicial: Date, anoFinal: Date):Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + `/questoes/ano/${anoInicial}/${anoFinal}`, this.token);
  }

  getByAnoAnteriorQuestao(ano: Date):Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + `/questoes/ano/${ano}`, this.token);
  }

  
  getQuestoesByCriadorId(id: number):Observable<Questao[]>{
    return this.http.get<Questao[]>(this.url + `/questoes/criador/${id}`, this.token);
  }

  postQuestao(questao: Questao):Observable<Questao>{
    return this.http.post<Questao>(this.url + '/questoes', questao, this.token);
  }

  putQuestao(questao: Questao):Observable<Questao>{
    return this.http.put<Questao>(this.url + '/questoes', questao, this.token);
  }

  putQuestaoComAlternativa(questao: Questao):Observable<Questao>{
    return this.http.put<Questao>(this.url + '/questoes/questaoComAlternativas', questao, this.token);
  }

  deleteQuestao(id: number){
    return this.http.delete<Questao>(this.url + `/questoes/${id}`, this.token);
  }
}
