import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Alternativa } from '../model/Alternativa';

@Injectable({
  providedIn: 'root'
})
export class AlternativaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  // url: string = 'https://sprintquiz.herokuapp.com';
  // url: string = 'http://localhost:8081';
  url = environment.url;

getAllAlternativas():Observable<Alternativa[]>{
  return this.http.get<Alternativa[]>(this.url + '/alternativas', this.token)
}

getAlternativaById(id: number): Observable<Alternativa>{
  return this.http.get<Alternativa>(this.url + `/alternativas/${id}`, this.token);
}

getAlternativasByTexto(texto: string): Observable<Alternativa[]>{
  return this.http.get<Alternativa[]>(this.url + `/alternativas/texto/${texto}`, this.token);
}

putAlternativa(alternativa: Alternativa):Observable<Alternativa>{
  return this.http.put<Alternativa>(this.url + '/alternativas', alternativa, this.token);
}

postAlternativa(alternativa: Alternativa):Observable<Alternativa>{
  return this.http.post<Alternativa>(this.url + '/alternativas', alternativa, this.token)
}

postAlternativas(listaAlternativas: Alternativa[]):Observable<Alternativa[]>{
  return this.http.post<Alternativa[]>(this.url + '/alternativas/listaAlternativas', listaAlternativas, this.token)
}

deleteAlternativaById(id: number){
  return this.http.delete(this.url + `/alternativas/${id}`, this.token);
}






}
