import { AlertasService } from '../../service/alertas.service';
import { environment } from 'src/environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../../model/UsuarioLogin';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss'],
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin();
  tipoCampoSenha: string = 'password';
  mostrarSenha: boolean = false;


  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService
  ) {}

  ngOnInit(): void {
    window.scroll(0, 0);
  }



  exibirSenha(){
    if(this.mostrarSenha){
      this.tipoCampoSenha = 'password'
      this.mostrarSenha = false;
    } else {
      this.tipoCampoSenha = 'text'
      this.mostrarSenha = true;
    }

  }

  verificaLogin() {
    this.authService.entrar(this.usuarioLogin).subscribe(
      (usuario: UsuarioLogin) => {
        this.usuarioLogin = usuario;

        environment.token = this.usuarioLogin.token;
        environment.foto = this.usuarioLogin.foto;
        environment.id = this.usuarioLogin.id;
        environment.nome = this.usuarioLogin.nome;
        environment.tipo = this.usuarioLogin.tipo;

        this.router.navigate(['/dashboard']);
      },
      (erro) => {
        if (erro.status == 401)
          this.alerta.showAlertDanger('Usuário ou senha incorreta!');
      }
    );
  }
}
