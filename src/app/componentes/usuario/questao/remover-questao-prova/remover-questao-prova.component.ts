import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alternativa, createAlternativa } from 'src/app/model/Alternativa';
import { CategoriaQuestao, createCategoriaQuestao } from 'src/app/model/CategoriaQuestao';
import { Prova } from 'src/app/model/Prova';
import { createQuestao, Questao } from 'src/app/model/Questao';
import { createQuestaoProva, QuestaoProva } from 'src/app/model/QuestaoProva';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { QuestaoProvaService } from 'src/app/service/questao-prova.service';
import { QuestaoService } from 'src/app/service/questao.service';

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
