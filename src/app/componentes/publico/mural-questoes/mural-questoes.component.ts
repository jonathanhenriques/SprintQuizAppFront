import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alternativa } from 'src/app/model/Alternativa';
import { CategoriaQuestao } from 'src/app/model/CategoriaQuestao';
import { Prova } from 'src/app/model/Prova';
import { Questao } from 'src/app/model/Questao';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaQuestaoService } from 'src/app/service/categoria-questao.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { QuestaoService } from 'src/app/service/questao.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-mural-questoes',
  templateUrl: './mural-questoes.component.html',
  styleUrls: ['./mural-questoes.component.scss']
})
export class MuralQuestoesComponent implements OnInit {


  usuario: Usuario = new Usuario();
  questao: Questao = {
    id: 0,
    instituicao: '',
    ano: undefined,
    texto: '',
    imagem: '',
    alternativas: [],
    resposta: new Alternativa,
    categoria: new CategoriaQuestao,
    criador: new Usuario
  };
  prova: Prova = new Prova();
  categoriaQuestao: CategoriaQuestao = new CategoriaQuestao();


  idUsuario: number = environment.id;
  idQuestao: number = 0;
  idCategoriaQuestao: number = 0;
  criadorQuestao: Usuario = new Usuario();
  qtdAlternativas: number = 0;

  listaQuestoes: Questao[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private authService: AuthService,
    private questaoService: QuestaoService,
    private provaService: ProvaServiceService,
    private categoriaQuestaoService: CategoriaQuestaoService
  ) { }

  ngOnInit() {

    AuthService.verificaLogado(this.alertas, this.router);
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
    this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;

    })
  }

  findByIdCategoriaQuestao() {
    this.categoriaQuestaoService.getByIdCategoriaQuestao(this.idCategoriaQuestao).subscribe((categoriaQuestaoResp: CategoriaQuestao) => {
      this.categoriaQuestao = categoriaQuestaoResp;
    })
  }

  // findByIdCriadorQuestao(){
  //   this.authService.getByIdUsuario(this.questao.criador.id).subscribe((usuarioresp: Usuario) => {
  //     this.criadorQuestao = usuarioresp;
  //   })
  // }


  voltarPagina() {
    window.history.back();
  }



}
