import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.teste';

import { PacienteED}from '../models/PacienteED';


@Injectable({
  providedIn: 'root',
})
export class PacientesService {

  constructor(private http: HttpClient) {}

  // token = {
  //   headers: new HttpHeaders(),
  // };

  url = 'http://localhost:8081' /*environment.urlTeste;*/

  valor = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmcm9kb0BlbWFpbC5jb20iLCJpc3MiOiJBUEkgSW5zdGl0dXRvIENyaWFyIiwiZXhwIjoxNjgzNDM3MTI1fQ.aJy2GNe-9cGmrmPMC5Y8nTHjPie9suHVobLD_VIsYKw'

  token = {
    headers: new HttpHeaders().set('Authorization', this.valor)
  };


  // private baseUrl = 'http://localhost:8081/api/v1/pacientes';

  obterPacientePorId(id: number): Observable<PacienteED> {
    const url = `${this.url}/pacientes/${id}`;
    return this.http.get<PacienteED>(url);
  }


  teste(): Observable<any>{
    let usuario = {
      "id": null,
      "nome": "teste"
    }
    return this.http.post(`http://localhost:8080/usuario`, usuario)
  }

  getAll(): Observable<any[]> {
    return this.http.get<any>(`http://localhost:8080/usuario/todos`, this.token).pipe(
      tap(response => console.log(response)));
  }




  obterTodosPacientes(): Observable<PacienteED[]> {
    return this.http.get<PacienteED[]>(`${this.url}/pacientes`, this.token).pipe(
      tap(response => console.log(response)));
  }


  cadastrarPaciente(paciente: any): Observable<any> {
    return this.http.post<any>(`${this.url}/pacientes`, paciente,this.token).pipe(
      tap(response => console.log('respo : '+response)));
  }


  getAllPacientes(): Observable<PacienteED[]> {
    return this.http.get<PacienteED[]>(this.url + '/pacientes' /*this.token*/)
    .pipe(
      tap(data => console.log('All: ', JSON.stringify(data))))
  }

  getAllPacientesAtivos(ativo: boolean): Observable<PacienteED[]> {
    return this.http.get<PacienteED[]>(
      this.url + `/pacientes/isAtivo/${ativo}` /*this.token*/
    );
  }

//   getPacienteById(id: number): Observable<PacienteED> {
//     return this.http.get<PacienteED>(
//       this.url + `/pacientes/${id}` /*this.token*/
//     );
//   }

//   getPacientesByNome(nome: string): Observable<PacienteED[]> {
//     return this.http.get<PacienteED[]>(
//       this.url + `/nomePaciente/${nome}` /*this.token*/
//     );
//   }

//   getPacientesByNomeExame(nomeExame: string): Observable<PacienteED[]> {
//     return this.http.get<PacienteED[]>(
//       this.url + `/nomeExame/${nomeExame}` /*this.token*/
//     );
//   }

//   getPacientesPorEndereco(nomeRua: string): Observable<PacienteED[]> {
//     return this.http.get<PacienteED[]>(
//       this.url + `/provas/descricao/${nomeRua}` /*this.token*/
//     );
//   }

//   postPaciente(paciente: PacienteED): Observable<PacienteED> {
//     return this.http.post<PacienteED>(
//       this.url + '/pacientes',
//       paciente /*this.token*/
//     );
//   }

//   putPaciente(paciente: PacienteED): Observable<PacienteED> {
//     return this.http.put<PacienteED>(
//       this.url + '/pacientes',
//       paciente /*this.token*/
//     );
//   }

//   deleteLogicoPaciente(id: number) {
//     return this.http.delete(this.url + `/pacientes/${id}` /*this.token*/);
//   }
// }

}
