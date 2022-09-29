import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.scss']
})
export class AtualizarUsuarioComponent implements OnInit {


  usuario: Usuario = new Usuario();
  senhaInserida: string = '';
  // tipoUsuario: string;
  tipoCampoSenha: string = 'password';
  mostrarSenha: boolean = false;

  constructor(
    private authService: AuthService,
    private alertas: AlertasService,
    private router: Router
  ) { }

  ngOnInit(){
    AuthService.verificaLogado(this.alertas, this.router);
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

  atualizar() {

    if (this.usuario.senha != this.senhaInserida)
      this.alertas.showAlertDanger('As senhas estão diferentes!');
    else {
      if (this.usuario.foto == null)
        this.usuario.foto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png';

      alert(this.usuario.nome);
      alert(this.usuario.usuario);
      alert(this.usuario.senha);
      alert(this.usuario.foto);
      alert(this.usuario.tipo);
      alert(this.usuario.questoes);
      alert(this.usuario.provas);



      this.authService.atualizar(this.usuario).subscribe((usuarioResposta: Usuario) => {
        this.usuario = usuarioResposta;
        this.router.navigate(['/entrar']);
        this.alertas.showAlertSuccess('Usuário atualizado com sucesso!');
      }, erro => {
        if (erro.status == 400)
          this.alertas.showAlertDanger('Revise os campos!');
      })
    }

  }

  // pegaTipoUsuario(event: any) {
  //   this.tipoUsuario = event.target.value;
  // }

}
