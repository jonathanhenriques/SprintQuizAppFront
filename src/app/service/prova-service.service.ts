import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Prova } from '../model/Prova';
import { UsuarioLogin } from '../model/UsuarioLogin';

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

  getAllProvas():Observable<Prova[]>{
    return this.http.get<Prova[]>('https://sprintquiz.herokuapp.com/provas', this.token);
  }

  getProvaByNome(nome: string):Observable<Prova[]>{
    return this.http.get<Prova[]>(`https://sprintquiz.herokuapp.com/provas/nome/${nome}`, this.token);
  }

  getProvaByDescricao(descricao: string):Observable<Prova[]>{
    return this.http.get<Prova[]>(`https://sprintquiz.herokuapp.com/provas/descricao/${descricao}`, this.token);
  }

  postProva(prova: Prova):Observable<Prova>{
    return this.http.post<Prova>('https://sprintquiz.herokuapp.com/provas', prova, this.token);
  }

  deleteProva(id: number){
    return this.http.delete(`https://sprintquiz.herokuapp.com/provas/${id}`, this.token);
  }
}
