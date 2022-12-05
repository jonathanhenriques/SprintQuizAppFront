import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Prova } from 'src/app/prova/model/Prova';
import { Questao, createQuestao } from 'src/app/questao/model/Questao';
import { QuestaoProva, createQuestaoProva } from '../model/QuestaoProva';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProvaServiceService } from 'src/app/prova/service/prova-service.service';
import { QuestaoProvaService } from '../service/questao-prova.service';
import { QuestaoService } from 'src/app/questao/service/questao.service';

@Component({
  selector: 'app-remover-questao-prova',
  templateUrl: './remover-questao-prova.component.html',
  styleUrls: ['./remover-questao-prova.component.scss']
})
export class RemoverQuestaoProvaComponent implements OnInit {

  questao: Questao = createQuestao();
  // prova: Prova = new Prova();
  prova: Prova;
  questaoProva: QuestaoProva = createQuestaoProva();

  idQuestao: number = 0;
  idProva: number = 0;

  questaoSelecionada: Questao = createQuestao()

  listaTodasQuestoes: Questao[] = [];
  listaQuestoesSelecionadas: QuestaoProva[] = [];


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
    // this.questao.

    // this.findAllQuestoes();
    this.findProvaoById();
  }





  // findAllQuestoes() {
  //   return this.questoesService.getAllQuestao().subscribe((listaQuestoesResp: Questao[]) => {
  //     this.listaTodasQuestoes = listaQuestoesResp;
  //   })
  // }

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

  findQuestaoProvaByQuestao() { }

  adicionaQuestao(id: number) {

    this.idQuestao = id;
    this.toastr.info("adicinada");
    this.findQuestaoById();
    // alert(this.prova.instituicao);
    this.toastr.info(" | " + this.prova.instituicao);

  }

  removerQuestao(idQuestaoProva: number) {
    this.questaoProvaService.deleteQuestaoProva(idQuestaoProva).subscribe(() => {
      this.toastr.success('Questão retirada com sucesso!')
      this.voltarPagina();
    })
  }

  voltarPagina() {
    window.history.back();
  }

}
