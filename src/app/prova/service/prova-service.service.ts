import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Observable, take, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Prova } from '../model/Prova';
import { ResponsePageable } from 'src/app/shared/models/ResponsePageable';

export type Content = {

}

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
  // url: string = 'http://localhost:8081';
  url = '/provas';

  // getAllProvas(): Observable<any[]> {
  //   const response = this.http.get<any>(environment.url + this.url).pipe(
  //     tap((resp: any) => { // Aqui você precisa indicar que 'resp' é do tipo 'any'
  //       const content = resp.content;
  //       console.log('listaProva - ' + JSON.stringify(content, null, 2));
  //     }),
  //     map((resp: any) => resp.content)
  //   );
  // }



  getAllProvas(): Observable<ResponsePageable> {
    const response = this.http.get<ResponsePageable>(environment.url + this.url);
    // console.log(JSON.stringify(response, null, 2));
    return response;
  }



  getProvaById(id: number):Observable<Prova>{
    return this.http.get<Prova>(environment.url + this.url + `/${id}`, this.token);
  }

  getProvaByCriadorId(id: number):Observable<Prova[]>{
    // return this.http.get<Prova[]>(environment.url + this.url + `/criador/${id}`, this.token);
    return this.http.get<Prova[]>('http://localhost:8081/provas/criador/1');
  }

  getProvaByNome(nome: string):Observable<Prova[]>{
    return this.http.get<Prova[]>(environment.url + this.url  + `/nome/${nome}`, this.token);
  }

  getProvaByDescricao(descricao: string):Observable<Prova[]>{
    return this.http.get<Prova[]>(environment.url + this.url  + `/${descricao}`, this.token);
  }

  postProva(prova: Prova):Observable<Prova>{
    return this.http.post<Prova>(environment.url + this.url , prova, this.token);
  }

  putProva(prova: Prova):Observable<Prova>{
    return this.http.put<Prova>(environment.url + this.url , prova, this.token);
  }

  deleteProva(id: number){
    return this.http.delete(environment.url + this.url  + `/${id}`, this.token);
  }
}


interface ResponseData {
  content: any[]; // Aqui você define a estrutura do objeto retornado pela requisição
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
