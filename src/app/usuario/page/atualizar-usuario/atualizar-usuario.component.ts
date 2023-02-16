import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { environment } from 'src/environments/environment.prod';
import { Usuario, createUsuario } from '../../model/Usuario';

@Component({
  selector: 'app-atualizar-usuario',
  templateUrl: './atualizar-usuario.component.html',
  styleUrls: ['./atualizar-usuario.component.scss']
})
export class AtualizarUsuarioComponent implements OnInit {


  usuario: Usuario = createUsuario();
  senhaInserida: string = '';
  idUsuario: number;
  tipoCampoSenha: string = 'password';
  mostrarSenha: boolean = false;

  constructor(
    private usuarioService: UsuarioService,
    private alertas: AlertasService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    UsuarioService.verificaLogado(this.alertas, this.router);
    // this.idUsuario = +this.activateRoute.snapshot.params['id']
    this.idUsuario = environment.id
    this.getByIdUsuario(this.idUsuario)
    // console.log(this.usuario.nome)
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

  getByIdUsuario(id: number) {
    this.usuarioService.getByIdUsuario(id).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;

      console.log(this.usuario.nome);
      console.log(this.usuario.email);
      console.log(this.usuario.senha);
      console.log(this.usuario.foto);
      console.log(this.usuario.tipo);
      console.log(this.usuario.questoes);
      console.log(this.usuario.provas);
    })
  }

  atualizar() {

    if (this.usuario.senha != this.senhaInserida)
      this.alertas.showAlertDanger('As senhas estão diferentes!');
    else {
      if (this.usuario.foto == null)
        this.usuario.foto = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png';

      alert(this.usuario.nome);
      alert(this.usuario.email);
      alert(this.usuario.senha);
      alert(this.usuario.foto);
      alert(this.usuario.tipo);
      alert(this.usuario.questoes);
      alert(this.usuario.provas);



      this.usuarioService.atualizar(this.usuario).subscribe((usuarioResposta: Usuario) => {
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
