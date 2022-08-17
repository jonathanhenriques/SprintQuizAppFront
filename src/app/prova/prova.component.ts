import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaProva } from '../model/CategoriaProva';
import { Prova } from '../model/Prova';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { ProvaServiceService } from '../service/prova-service.service';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements OnInit {


  usuario: Usuario = new Usuario();
  prova: Prova = new Prova();
  categoriaProva: CategoriaProva = new CategoriaProva();

  idProva: number = 0;
  idUsuario: number = environment.id;

  constructor(
    private router: Router,
    private provaService: ProvaServiceService,
    private authService: AuthService,
    private lertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0);
     // if(environment.token == '')
    //   this.router.navigate(['/entrar']);
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;
    });
  }

  postProva(){
    this.prova.id = this.idProva;
    this.prova.categoria = this.categoriaProva;
  }

}
