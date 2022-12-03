import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectsService } from 'src/app/service/subjects.service';
import { environment } from 'src/environments/environment.prod';
import { createUsuario, Usuario} from '../../model/Usuario'
import { UsuarioLogin } from '../../model/UsuarioLogin';
import { AlertasService } from '../../service/alertas.service';

@Component({
  selector: 'app-navegacao-bar',
  templateUrl: './navegacao-bar.component.html',
  styleUrls: ['./navegacao-bar.component.scss']
})
export class NavegacaoBarComponent implements OnInit {

  @Output() men!: HTMLElement;

  usuarioLogan: UsuarioLogin = new UsuarioLogin();
  usuario: Usuario = createUsuario();
  idUsuario = environment.id;
  foto = environment.foto;
  nome = environment.nome;

  constructor(
    private alertas: AlertasService,
    private router: Router,
    private subjectsService: SubjectsService
  ) { }

  ngOnInit(){
    // AuthService.verificaLogado(this.alertas, this.router);
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
