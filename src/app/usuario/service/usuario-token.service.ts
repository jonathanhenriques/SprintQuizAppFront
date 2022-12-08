import { Injectable } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import jwt_decode  from 'jwt-decode'
import { UsuarioLogin } from '../model/UsuarioLogin';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioTokenService {

  private usuarioSubject = new BehaviorSubject<UsuarioLogin>({})
  constructor(private tokenService: TokenService) { 
    if(this.tokenService.possuiToken()){
      this.decodificaJWT()
    }
  }



  private decodificaJWT(){
    const token = this.tokenService.retornaToken()
    const usuario = jwt_decode(token) as UsuarioLogin
    this.usuarioSubject.next(usuario)
  }

  retornaUsuario(){
    return this.usuarioSubject.asObservable()
  }

  salvaToken(token: string){
    this.tokenService.salvarToken(token)
    this.decodificaJWT()
  }

  logout(){
    this.tokenService.excluirToken()
    this.usuarioSubject.next({})
  }

  estaLogado(){
    return this.tokenService.possuiToken()
  }
}


