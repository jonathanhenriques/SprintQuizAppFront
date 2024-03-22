import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaQuestao, createCategoriaQuestao } from 'src/app/categoria-questao/model/CategoriaQuestao';
import { Questao } from '../../model/Questao';
import { Usuario, createUsuario } from 'src/app/usuario/model/Usuario';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { CategoriaQuestaoService } from 'src/app/categoria-questao/service/categoria-questao.service';
import { ProvaServiceService } from 'src/app/prova/service/prova-service.service';
import { QuestaoService } from '../../service/questao.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-mural-questoes',
  templateUrl: './mural-questoes.component.html',
  styleUrls: ['./mural-questoes.component.scss']
})
export class MuralQuestoesComponent implements OnInit {


  usuario: Usuario = createUsuario();
  questao: Questao;
  // prova: Prova = new Prova();
  // prova: Prova;
  categoriaQuestao: CategoriaQuestao = createCategoriaQuestao();


  // idUsuario: number = environment.id;
  idUsuario: number = 1;
  idQuestao: number = 0;
  idCategoriaQuestao: number = 0;
  criadorQuestao: Usuario = createUsuario();
  qtdAlternativas: number = 0;

  listaQuestoes: Questao[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private UsuarioService: UsuarioService,
    private questaoService: QuestaoService,
    private provaService: ProvaServiceService,
    private categoriaQuestaoService: CategoriaQuestaoService
  ) { }

  ngOnInit() {

    // UsuarioService.verificaLogado(this.alertas, this.router);
    this.usuario.id = this.idUsuario;
    this.findByIdUsuario();
    this.findQuestoesByCriadorId();

    // this.idCategoriaQuestao = this.questao.id;
    // this.findByIdCategoriaQuestao();
    // this.findByIdCriadorQuestao();



  }

  findQuestoesByCriadorId() {
    this.questaoService.getQuestoesByCriadorId(this.idUsuario).subscribe((listaQuestoesResp: Questao[]) => {
      this.listaQuestoes = listaQuestoesResp;
    })
  }

  findByIdUsuario() {
    this.UsuarioService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;

    })
  }

  findByIdCategoriaQuestao() {
    this.categoriaQuestaoService.getByIdCategoriaQuestao(this.idCategoriaQuestao).subscribe((categoriaQuestaoResp: CategoriaQuestao) => {
      this.categoriaQuestao = categoriaQuestaoResp;
    })
  }

  // findByIdCriadorQuestao(){
  //   this.UsuarioService.getByIdUsuario(this.questao.criador.id).subscribe((usuarioresp: Usuario) => {
  //     this.criadorQuestao = usuarioresp;
  //   })
  // }


  voltarPagina() {
    window.history.back();
  }



}
