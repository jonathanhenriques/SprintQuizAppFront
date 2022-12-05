import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alternativa, createAlternativa } from '../../model/Alternativa';
import { Questao, createQuestao } from 'src/app/questao/model/Questao';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { AlternativaService } from '../../service/alternativa.service';
import { AuthService } from 'src/app/service/auth.service';
import { QuestaoService } from 'src/app/questao/service/questao.service';


@Component({
  selector: 'app-remover-alternativa-da-questao',
  templateUrl: './remover-alternativa-da-questao.component.html',
  styleUrls: ['./remover-alternativa-da-questao.component.scss']
})
export class RemoverAlternativaDaQuestaoComponent implements OnInit {


  alternativa: Alternativa = createAlternativa();
  questao: Questao = createQuestao();
  idQuestao: number = 0;

  listaAlternativas: Alternativa[] = [];


  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private alertas: AlertasService,
    private questaoService: QuestaoService,
    private alternativaService: AlternativaService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    AuthService.verificaLogado(this.alertas, this.router);

    this.idQuestao = +this.activatedRouter.snapshot.params['id'];
    this.getQuestaoById();

  }


  getQuestaoById() {
    this.questaoService.getByIdQuestao(this.idQuestao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      console.log('achou');
      console.log(this.questao.id);
      console.log(questaoResp.instituicao);
    })
  }


  removerAlternativa(event: number) {

    console.log('ewvent' + event);
    console.log('ques' + this.questao.resposta.id);
    if (this.questao.resposta.id == event) {
      this.alertas.showAlertInfo('Você não pode excluir está alternativa pois é a resposta da questão! Mude a resposta e tente novamente.');
      this.voltarPagina();
    } else {
      this.alternativaService.deleteAlternativaById(event).subscribe(() => {
        this.toastr.success('Alternativa deletada com sucesso!');
        this.questao = createQuestao();

        this.voltarPagina();
      })
    }


  }

  voltarPagina() {
    window.history.back();
  }

}
