import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
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
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getByIdCategoriaQuestao(id: number):Observable<CategoriaQuestaoService>{
    return this.http.get<CategoriaQuestaoService>(`https://sprintquiz.herokuapp.com/categoriaQuestao/${id}`, this.token);
  }

  getAllCategoriaQuestao():Observable<CategoriaQuestao[]>{
    return this.http.get<CategoriaQuestao[]>('https://sprintquiz.herokuapp.com/categoriaQuestao', this.token);
  }

  getByDescritivoCategoriaQuestao(descritivo: string):Observable<CategoriaQuestaoService[]>{
    return this.http.get<CategoriaQuestaoService[]>(`https://sprintquiz.herokuapp.com/categoriaQuestao/descritivo/${descritivo}`, this.token);
  }

  postCategoriaQuestao(categoriaQuestao: CategoriaQuestao):Observable<CategoriaQuestao>{
    return this.http.post<CategoriaQuestao>('https://sprintquiz.herokuapp.com/categoriaQuestao', categoriaQuestao, this.token);
  }

  putCategoriaQuestao(categoriaQuestao: CategoriaQuestao):Observable<CategoriaQuestao>{
    return this.http.put<CategoriaQuestao>('https://sprintquiz.herokuapp.com/categoriaQuestao', categoriaQuestao, this.token);
  }

  deleteCategoriaQuestao(id: number){
    return this.http.delete(`https://sprintquiz.herokuapp.com/categoriaQuestao/${id}`, this.token);
  }


}
