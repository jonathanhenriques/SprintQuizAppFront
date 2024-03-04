import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { QuestaoProva } from '../model/QuestaoProva';

@Injectable({
  providedIn: 'root'
})
export class QuestaoProvaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  // url: string = 'https://sprintquiz.herokuapp.com';
  // url: string = 'http://localhost:8081';
  url: string = environment.url;
  // url = '/questaoprova';

  getAllQuestaoProva():Observable<QuestaoProva[]>{
    return this.http.get<QuestaoProva[]>(environment.url + this.url, this.token);
  }

  getByIdQuestaoIdProvaQuestaoProva(idQuestao: number, idProva: number):Observable<QuestaoProva>{
    return this.http.get<QuestaoProva>(environment.url + this.url + `/questao/${idQuestao}/prova/${idProva}`)
  }

  postQuestaoProva(questaoProva: QuestaoProva, id: number):Observable<QuestaoProva>{
    return this.http.post<QuestaoProva>(environment.url + this.url + `/provaid/${id}`, questaoProva, this.token);
  }

  postListaQuestaoProva(listaQuestaoProva: QuestaoProva[], id: number):Observable<QuestaoProva[]>{
    return this.http.post<QuestaoProva[]>(environment.url + this.url + `/listaprovaid/${id}`, listaQuestaoProva, this.token);
  }

  deleteQuestaoProva(id: number){
    return this.http.delete(environment.url + this.url + `/${id}`, this.token);
  }
}
