import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
import { Alternativa, createAlternativa } from 'src/app/alternativa/model/Alternativa';
import { Prova } from 'src/app/prova/model/Prova';
import { ProvaServiceService } from 'src/app/prova/service/prova-service.service';
import { createQuestao, Questao } from 'src/app/questao/model/Questao';
import { QuestaoService } from 'src/app/questao/service/questao.service';
// import { UsuarioService } from 'src/app/service/usuario.service';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { createUsuario, Usuario } from 'src/app/usuario/model/Usuario';
import { environment } from 'src/environments/environment.prod';
import { GuardaRespostasService } from '../../service/guarda-respostas.service';

@Component({
  selector: 'app-tela',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {


  selectedMovie: Alternativa = createAlternativa();
  onSelect(alternativa: Alternativa): void {
    this.selectedMovie = alternativa;
  }

  resultado: boolean = false;

  usuario: Usuario = createUsuario();

  questao: Questao = createQuestao();
  @Output() prova: Prova;

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
  @Output() listaRespSelecionadasUsuario: number[] = [];
  @Output() listaRespostasCertas: number[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    // private UsuarioService: UsuarioService,
    private questaoService: QuestaoService,
    private provaService: ProvaServiceService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    // UsuarioService.verificaLogado(this.alertas, this.router);
    this.usuario.id = this.idUsuario;

    this.idProva = this.activatedRoute.snapshot.params['id'];

    // this.findQuestoesByCriadorId();
    this.findProvaById();



    // this.copiaQuestoesProvaSelecionada();




    this.obterRespostasCertasDasQuestoes();
    // this.listaRespostasCertas.forEach(element => { console.log(element) });

    this.startCounter();

    // this.UsuarioService.getByIdUsuario(this.idUsuario)
    //   .subscribe((res: Usuario) => this.usuario = res)
    // this.findByIdUsuario();

  }

  copiaQuestoesProvaSelecionada() {
    this.prova.questoes?.map((qq => {
      this.listaQuestoesDaProva.push(qq.questao);
    }))
  }

  roda() {
    this.listaRespSelecionadasUsuario.forEach(element => {
      console.log(element);
    });
  }

  reiniciar() {
    this.resultado = false;
  }

  irResultados() {
    for (let index = 0; index < this.listaRespSelecionadasUsuario.length; index++) {

      GuardaRespostasService.listaRespostas.push(this.listaRespSelecionadasUsuario[index]);
    }

    // this.router.navigate(['/resultados', this.idProva])
    this.resultado = true;
  }

  obterRespostasCertasDasQuestoes() {
    for (let i = 0; i < this.prova.questoes?.length; i++) {
      if (this.prova.questoes[i].questao?.resposta?.id === null || this.prova.questoes[i].questao?.resposta?.id === undefined) {
        this.prova.questoes?.map(questaoProva => this.listaRespostasCertas.push(questaoProva.questao?.resposta?.id!));
      }
    }


  }

  pegaRespostaQuestaoSelecionada(id: number | undefined) {
    id != undefined ? this.respostaUsuario = id : this.respostaUsuario = 0;
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




  registraResposta(alternativaSelecionada: number | undefined) {
    console.log(alternativaSelecionada);
    if (alternativaSelecionada) {
      this.listaRespSelecionadasUsuario[this.questaoAtual] = alternativaSelecionada
    }
    alternativaSelecionada != undefined ? this.listaRespSelecionadasUsuario[this.questaoAtual] = alternativaSelecionada : this.listaRespSelecionadasUsuario[this.questaoAtual] = 0
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
  //   return this.UsuarioService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
  //     this.usuario = usuarioResp;

  //   })
  // }






}
