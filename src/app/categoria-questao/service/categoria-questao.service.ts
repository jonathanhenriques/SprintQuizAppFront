import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoriaQuestao } from '../model/CategoriaQuestao';

@Injectable({
  providedIn: 'root'
})
export class CategoriaQuestaoService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders(
      
    ).set('Authorization', environment.token)
  }

  // url: string = 'https://sprintquiz.herokuapp.com';
  // url: string = 'http://localhost:8081';
  url = '/categoriaQuestao';

  getByIdCategoriaQuestao(id: number):Observable<CategoriaQuestao>{
    return this.http.get<CategoriaQuestao>(environment.url + this.url + `/${id}`, this.token);
  }

  getAllCategoriaQuestao():Observable<CategoriaQuestao[]>{
    return this.http.get<CategoriaQuestao[]>(environment.url + this.url, this.token);
  }

  getByDescricaoCategoriaQuestao(descricao: string):Observable<CategoriaQuestao[]>{
    return this.http.get<CategoriaQuestao[]>(environment.url + this.url + `/descricao/${descricao}`, this.token);
  }

  postCategoriaQuestao(categoriaQuestao: CategoriaQuestao):Observable<CategoriaQuestao>{
    return this.http.post<CategoriaQuestao>(environment.url + this.url, categoriaQuestao, this.token);
  }

  putCategoriaQuestao(categoriaQuestao: CategoriaQuestao):Observable<CategoriaQuestao>{
    return this.http.put<CategoriaQuestao>(environment.url + this.url, categoriaQuestao, this.token);
  }

  deleteCategoriaQuestao(id: number){
    return this.http.delete(environment.url + this.url + `/${id}`, this.token);
  }


}
