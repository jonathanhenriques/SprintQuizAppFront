import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { Usuario, createUsuario } from '../../model/Usuario';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {


  usuario: Usuario = createUsuario();
  senhaInserida: string = '';
  tipoUsuario: string = '';
  tipoCampoSenha: string = 'password';
  mostrarSenha: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private alertas: AlertasService,
    private router: Router
  ) { }

  ngOnInit() {

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

  confirmarSenha(event: any) {
    this.senhaInserida = event.target.value;
  }

  cadastrar() {

    if (this.usuario.senha != this.senhaInserida)
      this.alertas.showAlertDanger('As senhas estão diferentes!');
    else {
      if (this.usuario.foto == null)
        this.usuario.foto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png';

      this.usuarioService.cadastrar(this.usuario).subscribe((usuarioResposta: Usuario) => {
        this.usuario = usuarioResposta;
        this.router.navigate(['/entrar']);
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!');
      }, erro => {
        console.log(erro.status)
        console.log(erro)
        console.log(JSON.stringify(erro,null, 2))
        if(erro.status == 400)
          this.alertas.showAlertDanger('Revise os campos!');
        // if (!!erro.error?.errors[0]?.defaultMessage) {
        //   this.alertas.showAlertDanger(erro.error?.errors[0]?.defaultMessage + '@')
        // }
        // else if (erro.error.errors != 'undefined')
        //   this.alertas.showAlertDanger(erro.error.errors)
        // // }else if(erro.status == 400)
        // //   this.alertas.showAlertDanger('Revise os campos!');
      })
    }

  }

  pegaTipoUsuario(event: any) {
    this.tipoUsuario = event.target.value;
  }

}
