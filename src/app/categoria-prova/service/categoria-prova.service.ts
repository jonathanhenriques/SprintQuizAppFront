import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CategoriaProva } from '../model/CategoriaProva';

@Injectable({
  providedIn: 'root'
})
export class CategoriaProvaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  };


  // url: string = 'https://sprintquiz.herokuapp.com';
  // url: string = 'http://localhost:8081';
  url: string = environment.url;
  // url = '/categoriaProva';

  getAllCategoriaProva():Observable<any[]>{
    console.log(environment.token)
    return this.http.get<any[]>(environment.url + this.url, this.token);
  }

  getAllCategoriaProva1():Observable<any[]>{
    console.log(environment.token)
    return this.http.get<any[]>("localhost:8081/api/v1/pacientes");
  }

  getByIdCategoriaProva(id: number):Observable<CategoriaProva>{
    return this.http.get<CategoriaProva>(environment.url + this.url + `/${id}`, this.token);
  }

  postCategoriaProva(categoriaProva: CategoriaProva):Observable<CategoriaProva>{
    return this.http.post<CategoriaProva>(environment.url + this.url, categoriaProva, this.token);
  }

  putCategoriaProva(categoriaProva: CategoriaProva):Observable<CategoriaProva>{
    return this.http.put<CategoriaProva>(environment.url + this.url, categoriaProva, this.token);
  }

  deleteCategoriaProva(id: number){
    return this.http.delete<CategoriaProva>(environment.url + this.url + `/${id}`, this.token);
  }


}
