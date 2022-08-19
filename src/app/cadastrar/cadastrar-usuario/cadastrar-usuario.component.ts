import { AlertasService } from '../../service/alertas.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {


  usuario: Usuario = new Usuario();
  senhaInserida: string;
  tipoUsuario: string;
  tipoCampoSenha: string = 'password';
  mostrarSenha: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService


  ) { }

  ngOnInit(){
    window.scroll(0,0);
    // if(environment.token == '') {
    //   this.alertas.showAlertDanger('Sua sessão expirou. Faça login novamente!');
    //   this.router.navigate(['/entrar']);
    // }
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

  confirmarSenha(event: any) {
    this.senhaInserida = event.target.value;
  }

  cadastrar(){

    if(this.usuario.senha != this.senhaInserida)
      this.alertas.showAlertDanger('As senhas estão diferentes!');
    else {
      if(this.usuario.foto == null)
      this.usuario.foto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png';

      alert(this.usuario.nome);
      alert(this.usuario.usuario);
      alert(this.usuario.senha);
      alert(this.usuario.foto);
      alert(this.usuario.tipo);
      alert(this.usuario.questoes);
      alert(this.usuario.provas);



      this.authService.cadastrar(this.usuario).subscribe((usuarioResposta: Usuario) => {
        this.usuario = usuarioResposta;
        this.router.navigate(['/entrar']);
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!');
      }, erro => {
        if(erro.status == 400)
          this.alertas.showAlertDanger('Revise os campos!');
      })
    }

  }

  pegaTipoUsuario(event: any) {
    this.tipoUsuario = event.target.value;
  }

}
