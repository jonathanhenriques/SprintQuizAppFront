import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navegacao-bar',
  templateUrl: './navegacao-bar.component.html',
  styleUrls: ['./navegacao-bar.component.scss']
})
export class NavegacaoBarComponent implements OnInit {


  usuario: Usuario = new Usuario();
  idUsuario = environment.id;
  foto = environment.foto;
  nome = environment.nome;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // window.scroll(0,0);
    // if(environment.token == '') {
    //   this.alertas.showAlertDanger('Sua sessão expirou. Faça login novamente!');
    //   this.router.navigate(['/entrar']);
    // }
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
