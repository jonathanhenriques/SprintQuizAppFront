import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questao, createQuestao } from '../../model/Questao';
import { AuthService } from 'src/app/service/auth.service';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { QuestaoService } from '../../service/questao.service';

@Component({
  selector: 'app-deletar-questao',
  templateUrl: './deletar-questao.component.html',
  styleUrls: ['./deletar-questao.component.scss']
})
export class DeletarQuestaoComponent implements OnInit {
  questao: Questao = createQuestao();
  idQuestao: number = 0;

  constructor(
    private alertas: AlertasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private questaoService: QuestaoService
  ) { }

  ngOnInit() {
    AuthService.verificaLogado(this.alertas, this.router);

    this.idQuestao = this.activatedRoute.snapshot.params['id'];
    this.findByIdQuestao();

  }

  findByIdQuestao() {
    this.questaoService.getByIdQuestao(this.idQuestao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
    })
  }

  deletarQuestao() {


    this.questaoService.deleteQuestao(this.idQuestao).subscribe(() => {
      this.alertas.showAlertSuccess('Questão apagada com sucesso!');
      // this.router.navigate(['/cadastrar-prova']);
      this.voltarPagina();

    })
  }

  voltarPagina() {
    window.history.back();
  }
}
