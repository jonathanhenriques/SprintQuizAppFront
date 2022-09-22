import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
import { GuardaRespostasService } from 'src/app/service/guarda-respostas.service';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../../service/alertas.service';
import { AuthService } from '../../service/auth.service';
import { ProvaServiceService } from '../../service/prova-service.service';
import { QuestaoService } from '../../service/questao.service';
import { Prova } from '../../model/Prova';
import { Questao } from '../../model/Questao';
import { Usuario } from '../../model/Usuario';

@Component({
  selector: 'app-tela',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {


  resultado: boolean = false;

  usuario: Usuario = new Usuario();
  questao: Questao = new Questao();
  @Output() prova: Prova = new Prova();

  @Output() enviarDados = new EventEmitter();
  // contador: number = 0;
  timer: number = 60;

  @Output() quantidadeAcertos: number = 0;
  quantidadeErros: number = 0;
  respostaUsuario: number = 0;

  interval$: any;
  progresso: string = '0';

  idUsuario: number = environment.id;
  idQuestao: number = 0;
  idProva: number = 0;
  questaoAtual: number = 0;


  listaQuestoes: Questao[] = [];
  listaQuestoesDaProva: Questao[] = [];
  @Output() listaRespostasUsuarioDasQuestoes: number[] = [];
  @Output() listaRespostasQuestoesProva: number[] = [];

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

    this.idProva = this.activatedRoute.snapshot.params['id'];

    // this.findQuestoesByCriadorId();
    this.findProvaById();

    

    // this.copiaQuestoesProvaSelecionada();

    


    this.obtemRespostasDasQuestoes();
    this.listaRespostasQuestoesProva.forEach(element => { console.log(element) });

    this.startCounter();

    this.authService.getByIdUsuario(this.idUsuario)
      .subscribe((res: Usuario) => this.usuario = res)
    // this.findByIdUsuario();

  }

  copiaQuestoesProvaSelecionada(){
    this.prova.questoes?.map((qq => {
      this.listaQuestoesDaProva.push(qq.questao);
    }))
  }

  roda() {
    this.listaRespostasUsuarioDasQuestoes.forEach(element => {
      console.log(element);
    });
  }

  reiniciar(){
    this.resultado = false;
  }

  irResultados() {
    for (let index = 0; index < this.listaRespostasUsuarioDasQuestoes.length; index++) {

      GuardaRespostasService.listaRespostas.push(this.listaRespostasUsuarioDasQuestoes[index]);
    }

    // this.router.navigate(['/resultados', this.idProva])
    this.resultado = true;
  }

  obtemRespostasDasQuestoes() {
    // for (let i = 0; i < this.prova.questoes?.length; i++) {
    //   this.listaRespostasQuestoesProva.push(this.prova.questoes[i].questao.resposta.id);
    // }
    this.prova.questoes?.map(val => this.listaRespostasQuestoesProva.push(val.questao.resposta.id));

  }

  pegaRespostaQuestaoSelecionada(id: number) {
    this.respostaUsuario = id;
  }


  obterProgresso() {
    this.progresso = ((this.questaoAtual / this.prova.questoes.length) * 100).toString();
    return this.progresso;
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.timer--;
      if (this.timer == 0) {
        this.questaoAtual++;
        this.timer = 60;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscrib();
    }, 600000);
  }

  stopCounter() {
    this.interval$.unsubscrib();
    this.timer = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.timer = 60;
    this.startCounter();

  }




  registraResposta(respotaQuestao: number) {
    console.log(respotaQuestao);
    this.listaRespostasUsuarioDasQuestoes[this.questaoAtual] = respotaQuestao
  }

  proximaQuestao() {
    if (this.questaoAtual < this.prova.questoes?.length) {
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

      this.copiaQuestoesProvaSelecionada();
      console.log('listaquesto' + this.listaQuestoesDaProva[1]?.texto);
      console.log('prov' + this.prova.questoes[1].questao.texto);
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

  // findByIdUsuario() {
  //   return this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
  //     this.usuario = usuarioResp;

  //   })
  // }






}
