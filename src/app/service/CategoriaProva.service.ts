import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}

getAllCategoriaProva(): Observable<CategoriaProva[]>{
  return this.http.get<CategoriaProva[]>('https://sprintquiz.herokuapp.com/categoriaProva', this.token);
}

getByIdCategoriaProva(id: number): Observable<CategoriaProva>{
  return this.http.get<CategoriaProva>(`https://sprintquiz.herokuapp.com/categoriaProva/${id}`, this.token);
}

postCategoriaProva(categoriaProva: CategoriaProva): Observable<CategoriaProva>{
  return this.http.post<CategoriaProva>('https://sprintquiz.herokuapp.com/categoriaProva', categoriaProva, this.token);
}

deleteCategoriaProva(id: number): Observable<CategoriaProva>{
  return this.http.delete<CategoriaProva>(`https://sprintquiz.herokuapp.com/categoriaProva/${id}`);
}

}
