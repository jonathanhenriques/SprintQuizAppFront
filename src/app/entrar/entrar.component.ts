import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario,  createUsuario } from '../usuario/model/Usuario';
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

  emailUsuario: String = '';

  usuario: Usuario = createUsuario()
  usuarioLogin: UsuarioLogin = new UsuarioLogin();
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
        senha: ['', [Validators.required, Validators.minLength(8)]],

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
      this.usuarioLogin = this.loginForm.getRawValue()

      this.authService.entrar(this.usuarioLogin).subscribe(
        (usuario: UsuarioLogin) => {
          this.usuarioLogin = usuario;

          environment.token = this.usuarioLogin.token;
          environment.email = this.usuarioLogin.email
          // this.emailUsuario = this.usuarioLogin.email
          // this.findByEmailUsuario();
          // environment.id = this.usuario.id;
          environment.id = this.usuarioLogin.id;

          // environment.foto = this.usuarioLogin.foto;
          // environment.nome = this.usuarioLogin.nome;
          // environment.tipo = this.usuarioLogin.tipo;

          this.router.navigate(['/dashboard']);
        },
        (erro) => {
          console.log(this.usuarioLogin)
          if (erro.status == 401)
            this.alerta.showAlertDanger('Usuário ou senha incorreta!');
        }
      );
    }
    else
      console.log('inválido');
  }


  // findByEmailUsuario() {
  //   this.authService.getByEmailUsuario(this.emailUsuario).subscribe((usuarioResp: Usuario) => {
  //     this.usuario = usuarioResp;

  //   })
  // }


}
