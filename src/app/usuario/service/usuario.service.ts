import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import { json } from 'd3';
import { Observable, take, tap } from 'rxjs';
import { TokenService } from 'src/app/service/token.service';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { UsuarioTokenService } from './usuario-token.service';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(
    private http: HttpClient,
     private usuarioTokenService: UsuarioTokenService,
     private tokenService: TokenService

     ) { }

  // token = {
  //   headers: new HttpHeaders().set('Authorization', environment.token),
  // };

  token = {
    headers: new HttpHeaders().set('Authorization', `Bearer ${this.tokenService.retornaToken()}`),
  };

  // url: string = 'https://sprintquiz.herokuapp.com';
   url: string = 'http://localhost:8081/usuarios';
  //url: string = environment.url;
  // readonly url = '/usuarios';

  // entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
  //   return this.http.post<UsuarioLogin>(
  //     environment.url + this.url + '/logar',
  //     usuarioLogin
  //   )

  // }




   entrar(usuarioLogin: UsuarioLogin): Observable<HttpResponse<UsuarioLogin>> {
    console.log('retTok - ' + this.tokenService.retornaToken())
      return this.http.post<UsuarioLogin>(
        //environment.url +
        this.url + '/logar',
        usuarioLogin
        ,{observe: 'response'}
      )
      .pipe(
        tap((resp) => {
          console.table(resp.body)
          console.table(resp.headers)
          console.log('passsouuu')
          const authToken = resp.headers.get('x-access-token') ?? ''
          this.usuarioTokenService.salvaToken(resp.body.token)
        }
        )
      )
      .pipe(tap((resp) => console.log('entrarServ - ' + JSON.stringify(resp,null,2))))
    }




  cadastrar(usuario: Usuario): Observable<Usuario> {
    console.log('retTok - ' + this.tokenService.retornaToken())
    return this.http.post<Usuario>(
      //environment.url +
      this.url + '/cadastrar',
      usuario
    );
  }
  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(
      environment.url +
      this.url + '/atualizar',
      usuario, this.token
    );
  }

  getByIdUsuario(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      environment.url + this.url + `/${id}`,
      this.token
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


}

