import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.prod';
import { Prova } from '../model/Prova';
import { Questao } from '../model/Questao';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { ProvaServiceService } from '../service/prova-service.service';
import { QuestaoService } from '../service/questao.service';

@Component({
  selector: 'app-tela',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {


  usuario: Usuario = new Usuario();
  questao: Questao = new Questao();
  prova: Prova = new Prova();

  contador: number = 0;
  timer: number = 60;

  idUsuario: number = environment.id;
  idQuestao: number = 0;
  idProva: number = 0;
  questaoAtual: number = 0;

  listaQuestoes: Questao[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private authService: AuthService,
    private questaoService: QuestaoService,
    private provaService: ProvaServiceService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    AuthService.verificaLogado(this.alertas, this.router);
    this.usuario.id = this.idUsuario;

    // this.idQuestao = this.activatedRoute.snapshot.params['id'];
    this.idProva = this.activatedRoute.snapshot.params['id'];
    // this.questaoAtual = this.idProva;
    // this.findAllCategoriaQuestao();
    this.findByIdUsuario();
    this.findQuestoesByCriadorId();
    // this.findQuestaoById();
    this.findProvaById();



    // this.listaQuestoes = this.usuario.questoes;
    // this.qp = this.questao.alternativas.length;


  }
  proximaQuestao() {
    if (this.questaoAtual < this.prova.questoes.length) {
      this.questaoAtual++;
      this.timer = 60;
    };
    this.toastr.info(`${this.questaoAtual}`);
  }

  questaoAnterior() {
    if (this.questaoAtual > 0) {
      this.questaoAtual--;
      this.timer = 60;
    };
    this.toastr.info(`${this.questaoAtual}`);
  }

 

  findProvaById() {
    this.provaService.getProvaById(this.idProva).subscribe((provaResp: Prova) => {
      this.prova = provaResp;

      console.log(this.prova.questoes[1].questao.texto);
      // provaResp.questoes.forEach(element => {
      //   alert(element.instituicao);
      // });
    })

  }
  ///////////////////////
  findQuestaoById() {
    this.questaoService.getByIdQuestao(this.idQuestao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
    })
  }

  findQuestoesByCriadorId() {
    this.questaoService.getQuestoesByCriadorId(this.idUsuario).subscribe((listaQuestoesResp: Questao[]) => {
      this.listaQuestoes = listaQuestoesResp
    })
  }

  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;
      // this.listaQuestoes = usuarioResp.questoes;
      // alert(this.listaQuestoes[0].texto);
      // this.listaQuestoes.forEach(e => {
      //   // alert(e instanceof Questao);
      //   // alert(e instanceof Usuario);
      //   alert(e instanceof Prova);
      // });
    })
  }




}
