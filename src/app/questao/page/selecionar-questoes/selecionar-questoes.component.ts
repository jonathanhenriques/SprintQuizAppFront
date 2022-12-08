import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Alternativa, createAlternativa } from 'src/app/alternativa/model/Alternativa';
import { CategoriaQuestao, createCategoriaQuestao } from 'src/app/categoria-questao/model/CategoriaQuestao';
import { Questao, createQuestao } from '../../model/Questao';
import { QuestaoProva, createQuestaoProva } from 'src/app/questao-prova/model/QuestaoProva';
import { Usuario, createUsuario } from 'src/app/usuario/model/Usuario';
import { Prova } from 'src/app/prova/model/Prova';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { ProvaServiceService } from 'src/app/prova/service/prova-service.service';
import { QuestaoProvaService } from 'src/app/questao-prova/service/questao-prova.service';
import { QuestaoService } from '../../service/questao.service';

@Component({
  selector: 'app-selecionarquestoes',
  templateUrl: './selecionar-questoes.component.html',
  styleUrls: ['./selecionar-questoes.component.scss']
})
export class SelecionarQuestoesComponent implements OnInit {



  questao: Questao = createQuestao()
  // prova: Prova = new Prova();
  prova: Prova;
  questaoProva: QuestaoProva = createQuestaoProva();

  idQuestao: number = 0;
  idProva: number = 0;

  questaoSelecionada: Questao = createQuestao()

  // listaIdQuestoesSelecionadas: number[] = [];


  // return this.questoesService.getAllQuestao().subscribe((listaQuestoesResp: Questao[]) => {
  //   this.listaTodasQuestoes = listaQuestoesResp;
  // })

  listaTodasQuestoes1: Observable<Questao[]>;
  listaTodasQuestoes: Questao[] = [];
  listaQuestoesSelecionadas: Questao[] = [];
  listaQuestoesProva: QuestaoProva[] = [];

  objson: string = '';

  constructor(private alertas: AlertasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private questoesService: QuestaoService,
    private provaService: ProvaServiceService,
    private questaoProvaService: QuestaoProvaService,
    private UsuarioService: UsuarioService,
    private toastr: ToastrService) { }

  ngOnInit() {
    window.scroll(0, 0);
    UsuarioService.verificaLogado(this.alertas, this.router);

    this.listaTodasQuestoes1 = this.questoesService.getAllQuestao();

    this.idProva = this.activatedRoute.snapshot.params['id'];

    this.findAllQuestoes();
    this.findProvaoById();
  }





  findAllQuestoes() {
    return this.questoesService.getAllQuestao().subscribe((listaQuestoesResp: Questao[]) => {
      this.listaTodasQuestoes = listaQuestoesResp;
    })
  }

  findProvaoById() {
    return this.provaService.getProvaById(this.idProva).subscribe((provaResp: Prova) => {
      this.prova = provaResp;
      // console.log(this.prova.id);
    })
  }

  findQuestaoById() {

    this.questoesService.getByIdQuestao(this.idQuestao).subscribe((questaoResp: Questao) => {
      this.questaoSelecionada = questaoResp;
      alert(questaoResp.texto);

    })
  }

  //=================================================================================================================================
  adicionaQuestao(id: number) {

    this.idQuestao = id;
    this.toastr.info("adicinada");
    this.findQuestaoById();
    // alert(this.prova.instituicao);
    this.toastr.info(" | " + this.prova.instituicao);

  }

  cadastrarQuestaoProva() {
    // this.findQuestaoById();
    // alert(this.idProva);
    this.prova.id = this.idProva;
    // alert(this.prova.id);
    this.questaoProva.prova = this.prova;
    // alert(this.questaoProva.prova.id);

    // alert(this.idQuestao);
    this.questaoSelecionada.id = this.idQuestao;
    // alert(this.questaoSelecionada.id);
    this.questaoProva.questao = this.questaoSelecionada;
    // alert(this.questaoProva.questao.id);
    // this.listaQuestoesSelecionadas.push(this.questaoProva);
    // this.questaoProva.id = 0;
    let objson = JSON.stringify(this.questaoProva, null, 2);
    alert(objson);

    this.toastr.info('chamando post');
    this.questaoProvaService.postQuestaoProva(this.questaoProva, this.idProva).subscribe((questaoProvaResp: QuestaoProva) => {
      alert('EXECUTOU');
      this.questaoProva = questaoProvaResp;
      // alert('qid' + questaoProvaResp.questao.id);
      // alert('pid' + questaoProvaResp.prova.id);
      this.questaoProva = createQuestaoProva();
      // this.prova = new Prova();
    },
      (error) => {
        if (error.status === 400) {
          console.log('não foi possível cadastrar a questão');
        }
      }
    )
    this.voltarPagina();
  }

  voltarPagina() {
    // window.history.back();
    this.router.navigate(['/mural-provas']);
    // this.router.navigate(['/teste']);


  }

  //=================================================================================================================================



  adicionaQuestoes(questaoSelecionada: Questao) {
    if (this.listaQuestoesSelecionadas.includes(questaoSelecionada)) {
      this.listaQuestoesSelecionadas = this.listaQuestoesSelecionadas.filter(obj => obj != questaoSelecionada);
    }


    // this.idQuestao = questaoSelecionada.id;
    this.listaQuestoesSelecionadas.push(questaoSelecionada);
    this.toastr.info(this.listaQuestoesSelecionadas.length + " adicinada(s)");
    // this.findQuestaoById();
    // console.log("prova.instituicao | " + this.prova.instituicao );

  }


  cadastrarListaQuestaoProva() {
    this.prova.id = this.idProva;
    // this.questaoProva.prova = this.prova;

    this.listaQuestoesSelecionadas.forEach(element => {



      let questaoProva: QuestaoProva = createQuestaoProva()
      let categoriaQuestao: CategoriaQuestao = createCategoriaQuestao();
      let usuario: Usuario = createUsuario()
      let alternativas: Alternativa[] = [];
      let alternativa: Alternativa = createAlternativa();
      let respostaAlternativa: Alternativa = createAlternativa();

      //add questao
      questaoProva.questao = element;

      //add alternativas em questao
      for (let i = 0; i < element.alternativas!.length; i++) {
        alternativa = element.alternativas![i];
        alternativas.push(alternativa);
        alternativa = createAlternativa();
      }

      //add alternativas em questao
      questaoProva.questao.alternativas = alternativas;


      //add prova
      questaoProva.prova = this.prova;

      //add categoria
      categoriaQuestao = element.categoria;
      questaoProva.questao.categoria = categoriaQuestao;

      //add usuario
      usuario = element.criador;
      questaoProva.questao.criador = usuario;

      //add resposta
      respostaAlternativa = element.resposta;
      questaoProva.questao.resposta = respostaAlternativa;



      this.listaQuestoesProva.push(questaoProva);
      // questaoProva = new QuestaoProva();
    });

    // this.questaoSelecionada.id = this.idQuestao;
    // this.questaoProva.questao = this.questaoSelecionada;

    // console.log(this.listaQuestoesSelecionadas[0])

    let objson = JSON.stringify(this.listaQuestoesProva[0], null, 2);
    console.log(objson);


    console.log('chamando post');
    this.questaoProvaService.postListaQuestaoProva(this.listaQuestoesProva, this.idProva).subscribe((listaQuestaoProvaResp: QuestaoProva[]) => {
      console.log('EXECUTOU');
      this.listaQuestoesProva = listaQuestaoProvaResp;
      this.listaQuestoesProva = [];
      // this.prova = new Prova();
    },
      (error) => {
        if (error.status === 400) {
          console.log('não foi possível cadastrar lista de questaoProva')
        }
      }
    )
    this.voltarPagina();
  }














}







