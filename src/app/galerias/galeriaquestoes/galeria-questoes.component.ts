import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prova } from 'src/app/model/Prova';
import { Questao } from 'src/app/model/Questao';
import { QuestaoProva } from 'src/app/model/QuestaoProva';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { QuestaoProvaService } from 'src/app/service/questao-prova.service';
import { QuestaoService } from 'src/app/service/questao.service';

@Component({
  selector: 'app-galeriaquestoes',
  templateUrl: './galeria-questoes.component.html',
  styleUrls: ['./galeria-questoes.component.scss']
})
export class GaleriaQuestoesComponent implements OnInit {


  questao: Questao = new Questao();
  prova: Prova = new Prova();
  questaoProva: QuestaoProva = new QuestaoProva();

  idQuestao: number;
  idProva: number;

  questaoSelecionada: Questao = new Questao();

  // listaIdQuestoesSelecionadas: number[] = [];
  listaTodasQuestoes: Questao[] = [];
  listaQuestoesSelecionadas: QuestaoProva[] = [];
  // listaQuestoesProva: QuestaoProva[] = [];

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

  adicionaQuestao(id: number) {

    this.idQuestao = id;
    this.toastr.info("adicinada");
    this.findQuestaoById();
    // alert(this.prova.instituicao);
    this.toastr.info(" | " + this.prova.instituicao );

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
    window.history.back();
  }

}
