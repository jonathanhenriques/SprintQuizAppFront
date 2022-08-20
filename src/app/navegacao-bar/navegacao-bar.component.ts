import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navegacao-bar',
  templateUrl: './navegacao-bar.component.html',
  styleUrls: ['./navegacao-bar.component.scss']
})
export class NavegacaoBarComponent implements OnInit {


  usuarioLogan: UsuarioLogin;
  usuario: Usuario = new Usuario();
  idUsuario = environment.id;
  foto = environment.foto;
  nome = environment.nome;

  constructor(
    private alertas: AlertasService,
    private router: Router,
  ) { }

  ngOnInit(){
    AuthService.verificaLogado(this.alertas, this.router);
  }


  sair() {
    environment.token = '';
    environment.id = 0;
    environment.nome = '';
    environment.foto = '';
    environment.tipo = '';
    this.router.navigate(['/entrar']);
  }

}
