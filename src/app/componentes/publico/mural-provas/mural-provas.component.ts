import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prova } from 'src/app/model/Prova';
import { createUsuario, Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-mural-provas',
  templateUrl: './mural-provas.component.html',
  styleUrls: ['./mural-provas.component.scss']
})
export class MuralProvasComponent implements OnInit {


  idProva: number = 0;
  name: string = '';

  usuario: Usuario = createUsuario();
  // prova: Prova = new Prova();
  // prova: Prova;

  idUsuario: number = environment.id;

  idProvaParaModal: number = 0;

  listaProvas: Prova[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private provaService: ProvaServiceService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    AuthService.verificaLogado(this.alertas, this.router);
    this.usuario.id = this.idUsuario;
    this.findByIdUsuario();
    // this.listaProvas = this.usuario.provas;
    this.findProvasByCriadorId();


  }

  pegaIdProvaParaModal(id: any) {
    this.idProvaParaModal = id;
  }

  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;

    })
  }

  quiz(id: number) {
    // this.router.navigate(['nav/quiz'], id)
    this.router.navigate(['nav/mural-provas/quiz', id]);
  }

  findProvasByCriadorId() {
    this.provaService.getProvaByCriadorId(this.idUsuario).subscribe((listaProvasResp: Prova[]) => {
      this.listaProvas = listaProvasResp;
      // listaProvasResp.forEach(e => {
      //   console.log(e.nome);
      // })
    })
  }

  // findProvasUsuario(){
  //   this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
  //     this.listaProvas = usuarioResp.provas;
  //     this.listaProvas.forEach(p => {
  //       alert(p.nome);
  //     });
  //   })
  // }



  voltarPagina() {
    window.history.back();
  }



}

