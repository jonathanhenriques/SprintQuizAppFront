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


  // url: string = 'https://sprintquiz.herokuapp.com';
  // url: string = 'http://localhost:8081';
  url = '/questoes';

  getByIdQuestao(id: number):Observable<Questao>{
    return this.http.get<Questao>(environment.url + this.url + `/${id}`, this.token);
  }

  getAllQuestao():Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url, this.token);
  }

  getByTextoQuestao(texto: string):Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url + `/texto/${texto}`, this.token);
  }

  getByInstituicaoQuestao(instituicao: string):Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url + `/instituicao/${instituicao}`, this.token);
  }

  getByAnoQuestao(ano: Date):Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url + `/ano/${ano}`, this.token);
  }

  getByAnoEntreInicialFinalQuestao(anoInicial: Date, anoFinal: Date):Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url + `/ano/${anoInicial}/${anoFinal}`, this.token);
  }

  getByAnoAnteriorQuestao(ano: Date):Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url + `/ano/${ano}`, this.token);
  }

  
  getQuestoesByCriadorId(id: number):Observable<Questao[]>{
    return this.http.get<Questao[]>(environment.url + this.url + `/criador/${id}`, this.token);
  }

  postQuestao(questao: Questao):Observable<Questao>{
    return this.http.post<Questao>(environment.url + this.url, questao, this.token);
  }

  putQuestao(questao: Questao):Observable<Questao>{
    return this.http.put<Questao>(environment.url + this.url, questao, this.token);
  }

  putQuestaoComAlternativa(questao: Questao):Observable<Questao>{
    return this.http.put<Questao>(environment.url + this.url + '/questaoComAlternativas', questao, this.token);
  }

  deleteQuestao(id: number){
    return this.http.delete<Questao>(environment.url + this.url + `/${id}`, this.token);
  }
}
