import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alternativa } from 'src/app/model/Alternativa';
import { CategoriaQuestao } from 'src/app/model/CategoriaQuestao';
import { Prova } from 'src/app/model/Prova';
import { Questao } from 'src/app/model/Questao';
import { QuestaoProva } from 'src/app/model/QuestaoProva';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { QuestaoProvaService } from 'src/app/service/questao-prova.service';
import { QuestaoService } from 'src/app/service/questao.service';

@Component({
  selector: 'app-selecionarquestoes',
  templateUrl: './selecionar-questoes.component.html',
  styleUrls: ['./selecionar-questoes.component.scss']
})
export class SelecionarQuestoesComponent implements OnInit {



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
  };;
  prova: Prova = new Prova();
  questaoProva: QuestaoProva = new QuestaoProva();

  idQuestao: number = 0;
  idProva: number = 0;

  questaoSelecionada: Questao = {
    id: 0,
    instituicao: '',
    ano: undefined,
    texto: '',
    imagem: '',
    alternativas: [],
    resposta: new Alternativa,
    categoria: new CategoriaQuestao,
    criador: new Usuario
  };;

  // listaIdQuestoesSelecionadas: number[] = [];
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
    private authService: AuthService,
    private toastr: ToastrService) { }

  ngOnInit() {
    window.scroll(0, 0);
    AuthService.verificaLogado(this.alertas, this.router);

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
      this.questaoProva = new QuestaoProva();
      this.prova = new Prova();
    })
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



      let questaoProva: any = new QuestaoProva();
      let categoriaQuestao: any = new CategoriaQuestao()
      let usuario: any = new Usuario();
      let alternativas: Alternativa[] = [];
      let alternativa: any = new Alternativa();
      let respostaAlternativa: any = new Alternativa();

      //add questao
      questaoProva.questao = element;

      //add alternativas em questao
      for (let i = 0; i < element.alternativas!.length; i++) {
        alternativa.id = element.alternativas![i];
        alternativas.push(alternativa);
        alternativa = new Alternativa();
      }

      //add alternativas em questao
      questaoProva.questao.alternativas = alternativas;


      //add prova
      questaoProva.prova = this.prova;

      //add categoria
      categoriaQuestao.id = element.categoria;
      questaoProva.questao.categoria = categoriaQuestao;

      //add usuario
      usuario.id = element.criador;
      questaoProva.questao.criador = usuario;

      //add resposta
      respostaAlternativa.id = element.resposta;
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
      this.prova = new Prova();
    })
    this.voltarPagina();
  }














}







