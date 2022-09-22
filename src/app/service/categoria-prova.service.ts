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
  url = environment.url;

  getAllCategoriaProva(p1?: string, p2?: string):Observable<any[]>{
    return this.http.get<any[]>(this.url + '/categoriaProva' + this.url + 'exemplo', this.token);
  }

  getByIdCategoriaProva(id: number):Observable<CategoriaProva>{
    return this.http.get<CategoriaProva>(this.url + `/categoriaProva/${id}`, this.token);
  }

  postCategoriaProva(categoriaProva: CategoriaProva):Observable<CategoriaProva>{
    return this.http.post<CategoriaProva>(this.url + '/categoriaProva', categoriaProva, this.token);
  }

  putCategoriaProva(categoriaProva: CategoriaProva):Observable<CategoriaProva>{
    return this.http.put<CategoriaProva>(this.url + '/categoriaProva', categoriaProva, this.token);
  }

  deleteCategoriaProva(id: number){
    return this.http.delete<CategoriaProva>(this.url + `/categoriaProva/${id}`, this.token);
  }

  
}
