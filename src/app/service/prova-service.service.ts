import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Prova } from '../model/Prova';

@Injectable({
  providedIn: 'root'
})
export class ProvaServiceService {

  
  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  // url: string = 'https://sprintquiz.herokuapp.com';
  url: string = 'http://localhost:8081';

  getAllProvas():Observable<Prova[]>{
    return this.http.get<Prova[]>(this.url + '/provas', this.token);
  }

  getProvaById(id: number):Observable<Prova>{
    return this.http.get<Prova>(this.url + `/provas/${id}`, this.token);
  }

  getProvaByCriadorId(id: number):Observable<Prova[]>{
    return this.http.get<Prova[]>(this.url + `/provas/criador/${id}`, this.token);
  }

  getProvaByNome(nome: string):Observable<Prova[]>{
    return this.http.get<Prova[]>(this.url + `/provas/nome/${nome}`, this.token);
  }

  getProvaByDescricao(descricao: string):Observable<Prova[]>{
    return this.http.get<Prova[]>(this.url + `/provas/descricao/${descricao}`, this.token);
  }

  postProva(prova: Prova):Observable<Prova>{
    return this.http.post<Prova>(this.url + '/provas', prova, this.token);
  }

  putProva(prova: Prova):Observable<Prova>{
    return this.http.put<Prova>(this.url + '/provas', prova, this.token);
  }

  deleteProva(id: number){
    return this.http.delete(this.url + `/provas/${id}`, this.token);
  }
}
