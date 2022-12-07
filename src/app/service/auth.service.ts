import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../shared/services/alertas.service';
import { Usuario } from '../usuario/model/Usuario';
import { UsuarioLogin } from '../usuario/model/UsuarioLogin';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  // url: string = 'https://sprintquiz.herokuapp.com';
  // url: string = 'http://localhost:8081';
  url = '/usuarios';

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(
      environment.url + this.url + '/logar',
      usuarioLogin
    );
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      environment.url + this.url + '/cadastrar',
      usuario
    );
  }
  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      environment.url + this.url + '/atualizar',
      usuario, this.token
    );
  }

  getByEmailUsuario(usuarioEmail: string): Observable<Usuario> {
    return this.http.get<Usuario>(environment.url + this.url + `/email/${usuarioEmail}`, this.token
    )
  }

  static verificaLogado(alertas: AlertasService, router: Router) {
    if (environment.token == '') {
      alertas.showAlertDanger('Sua sessão expirou. Faça login novamente!');
      router.navigate(['/entrar']);
    }
  }

   logado() {
    let ok: boolean = false;

    if (environment.token != '') {
      // console.log('tokenpassou - ' + environment.token)
      ok = true;
    }

    return ok;
  }

   deslogado() {
    if (!this.logado()) return true;
    return false;
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      environment.url + this.url + `/${id}`,
      this.token
    );
  }
}
