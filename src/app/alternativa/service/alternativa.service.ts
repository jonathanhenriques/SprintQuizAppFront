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
  url = '/alternativas';

getAllAlternativas():Observable<Alternativa[]>{
  return this.http.get<Alternativa[]>(environment.url + this.url, this.token)
}

getAlternativaById(id: number): Observable<Alternativa>{
  return this.http.get<Alternativa>(environment.url + this.url + `/${id}`, this.token);
}

getAlternativasByTexto(texto: string): Observable<Alternativa[]>{
  return this.http.get<Alternativa[]>(environment.url + this.url + `/texto/${texto}`, this.token);
}

putAlternativa(alternativa: Alternativa):Observable<Alternativa>{
  return this.http.put<Alternativa>(environment.url + this.url, alternativa, this.token);
}

postAlternativa(alternativa: Alternativa):Observable<Alternativa>{
  return this.http.post<Alternativa>(environment.url + this.url, alternativa, this.token)
}

postAlternativas(listaAlternativas: Alternativa[]):Observable<Alternativa[]>{
  return this.http.post<Alternativa[]>(environment.url + this.url + '/listaAlternativas', listaAlternativas, this.token)
}

deleteAlternativaById(id: number){
  return this.http.delete(environment.url + this.url + `/${id}`, this.token);
}


}
