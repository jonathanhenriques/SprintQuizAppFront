import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../componentes/model/Usuario';
import { UsuarioLogin } from '../componentes/model/UsuarioLogin';
import { AlertasService } from './alertas.service';

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
  url = environment.url;

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(
      this.url + '/usuarios/logar',
      usuarioLogin
    );
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      this.url + '/usuarios/cadastrar',
      usuario
    );
  }
  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      this.url + '/usuarios/atualizar',
      usuario
    );
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
      this.url + `/usuarios/${id}`,
      this.token
    );
  }
}
