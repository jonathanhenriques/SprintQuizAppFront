import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectsService } from 'src/app/service/subjects.service';
import { environment } from 'src/environments/environment.prod';
import { Usuario, createUsuario } from '../usuario/model/Usuario';
import { UsuarioLogin } from '../usuario/model/UsuarioLogin';
import { AlertasService } from '../shared/services/alertas.service';
import { from } from 'rxjs';
import { UsuarioService } from '../usuario/service/usuario.service';
import { UsuarioTokenService } from '../usuario/service/usuario-token.service';

@Component({
  selector: 'app-navegacao-bar',
  templateUrl: './navegacao-bar.component.html',
  styleUrls: ['./navegacao-bar.component.scss']
})
export class NavegacaoBarComponent implements OnInit {

  @Output() men!: HTMLElement;

  usuarioLogan: UsuarioLogin = new UsuarioLogin();
  usuario: Usuario = createUsuario();
  idUsuario: number = 0
  foto: string = '';
  nome: string = '';
  user$ = this.usuarioTokenService.retornaUsuario()

  constructor(
    private alertas: AlertasService,
    private router: Router,
    private subjectsService: SubjectsService,
    private usuarioTokenService: UsuarioTokenService
  ) { }

  ngOnInit() {
    // UsuarioService.verificaLogado(this.alertas, this.router);
    // console.log('NAVEGACAO BAR PASSOOOOOU')
    // console.log('id - ' + environment.id)
    // console.log('nome - ' + environment.nome)
    this.idUsuario = environment.id;
    this.foto = environment.foto;
    this.nome = environment.nome;
  }

  logado() {
    let ok: boolean = false;

    if (environment.token != '') {
      // console.log('tokenpassou - ' + environment.token)
      ok = true;
    }

    return ok;
  }

  logout(){
    this.usuarioTokenService.logout()
    this.router.navigate([''])
  }


  secaoEncerrada() {
    environment.token = '';
    environment.id = 0;
    environment.nome = '';
    environment.foto = '';
    environment.tipo = '';
    this.subjectsService.ocultarMenuHeader.next(false);
    this.router.navigate(['/entrar']);
  }

}
