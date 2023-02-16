import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prova } from '../../model/Prova';
import { Usuario, createUsuario } from 'src/app/usuario/model/Usuario';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { ProvaServiceService } from '../../service/prova-service.service';
import { environment } from 'src/environments/environment.prod';


@Component({
  selector: 'app-mural-sprints',
  templateUrl: './mural-sprints.component.html',
  styleUrls: ['./mural-sprints.component.scss']
})
export class MuralSprintsComponent implements OnInit {


  idProva: number = 0;
  name: string = '';

  usuario: Usuario = createUsuario();
  // prova: Prova = new Prova();
  prova: Prova;

  idUsuario: number = environment.id;

  idProvaParaModal: number = 0;

  listaProvas: Prova[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private provaService: ProvaServiceService,
    private UsuarioService: UsuarioService
  ) { }

  ngOnInit() {

    UsuarioService.verificaLogado(this.alertas, this.router);
    this.usuario.id = this.idUsuario;
    this.findByIdUsuario();
    // this.listaProvas = this.usuario.provas;
    this.findProvasByCriadorId();


  }

  pegaIdProvaParaModal(id: any) {
    this.idProvaParaModal = id;
  }

  findByIdUsuario() {
    this.UsuarioService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
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
  //   this.UsuarioService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
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

