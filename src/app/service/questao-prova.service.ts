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
  url = environment.url;

  getAllQuestaoProva():Observable<QuestaoProva[]>{
    return this.http.get<QuestaoProva[]>(this.url + '/questaoprova', this.token);
  }

  postQuestaoProva(questaoProva: QuestaoProva, id: number):Observable<QuestaoProva>{
    return this.http.post<QuestaoProva>(this.url + `/questaoprova/provaid/${id}`, questaoProva, this.token);
  }
}
