import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario, createUsuario } from '../usuario/model/Usuario';
import { UsuarioLogin } from '../usuario/model/UsuarioLogin';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss'],
})
export class EntrarComponent implements OnInit {


  loginForm!: FormGroup;

  emailUsuario: string = '';

  usuario: Usuario = createUsuario()
  usuarioLoginForm: UsuarioLogin = new UsuarioLogin();
  tipoCampoSenha: string = 'password';
  mostrarSenha: boolean = false;


  constructor(
    private authService: AuthService,
    private router: Router,
    private alerta: AlertasService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // window.scroll(0, 0);

    this.loginForm = this.formBuilder.group(
      {
        // usuario: ['', [Validators.required, Validators.email],],
        // senha: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(14)],]
        email: ['', [Validators.required]],
        senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],

      }
    );

    


  }



  exibirSenha() {
    if (this.mostrarSenha) {
      this.tipoCampoSenha = 'password'
      this.mostrarSenha = false;
    } else {
      this.tipoCampoSenha = 'text'
      this.mostrarSenha = true;
    }

  }

  solicitaLogin() {

    if (this.loginForm.valid) {
      this.usuarioLoginForm = this.loginForm.getRawValue()

      this.authService.entrar(this.usuarioLoginForm).subscribe(
        (usuarioResp: UsuarioLogin) => {
          // this.usuario = usuarioResp;

          environment.token = usuarioResp.token;
          environment.email = usuarioResp.login
          // console.warn('usuarioResp.login - ' + usuarioResp.login)
          this.emailUsuario = usuarioResp.login
          // console.warn('emailUsuario - ' + this.emailUsuario)
          this.buscaUsuarioEPreencheEnvironment();
          // console.table(this.usuario)
          // environment.id = this.usuario.id
          // // environment.nome.split('@')[0] = this.usuarioLogin.email;
          // environment.foto = this.usuario.foto;
          // environment.nome = this.usuario.nome;
          // environment.tipo = this.usuario.tipo;

          // this.router.navigate(['/dashboard']);
        },
        (erro) => {
          console.log(erro.error.message)

          if (erro.error.error !== 'undefined')
            this.alerta.showAlertDanger(erro.error.message)
          // if (erro.status == 401)
          //   this.alerta.showAlertDanger('Usuário ou senha incorreta!');
        }
      );
    }
    else
      console.log('inválido');
  }


  buscaUsuarioEPreencheEnvironment() {
    this.authService.getByEmailUsuario(this.emailUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;

      environment.id = this.usuario.id
      // environment.nome.split('@')[0] = this.usuarioLogin.email;
      environment.foto = this.usuario.foto;
      environment.nome = this.usuario.nome;
      environment.tipo = this.usuario.tipo;

      // console.log('buscaUsuarioid - ' + environment.id)
      this.router.navigate(['/dashboard']);
    })
  }


}
