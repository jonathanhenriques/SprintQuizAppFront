import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alternativa } from 'src/app/model/Alternativa';
import { Questao } from 'src/app/model/Questao';
import { AlertasService } from 'src/app/service/alertas.service';
import { AlternativaService } from 'src/app/service/alternativa.service';
import { AuthService } from 'src/app/service/auth.service';
import { QuestaoService } from 'src/app/service/questao.service';

@Component({
  selector: 'app-cadastrar-alternativa',
  templateUrl: './cadastrar-alternativa.component.html',
  styleUrls: ['./cadastrar-alternativa.component.scss']
})
export class CadastrarAlternativaComponent implements OnInit {


  alternativa: Alternativa = new Alternativa();
  questao: Questao = new Questao();
  idQuestao: number = 0;


  constructor(
    private alertas: AlertasService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private alternativaService: AlternativaService,
    private questaoService: QuestaoService
  ) { }

  ngOnInit() {
    AuthService.verificaLogado(this.alertas, this.router);
    this.idQuestao = this.ActivatedRoute.snapshot.params['id'];
  }

  a =   {
    "id": 0,
    "texto": "uma",
    "foto": "string",
    "questao": {"id": 2}
  }

  cadastrarAlternativa(){
    this.questao.id = this.idQuestao;
    this.alternativa.questao = this.questao;
    alert(this.questao.id);
    this.alternativaService.postAlternativa(this.alternativa).subscribe((alternativaResp: Alternativa) => {
      this.alternativa = alternativaResp;
      this.alertas.showAlertSuccess('Alternativa criada com sucesso!');
      this.alternativa = new Alternativa();
    })
  }

  // getQuestaoById(){
  //   this.questaoService.getByIdQuestao(this.idQuestao).subscribe((questaoResp: Questao) => {
  //     this.questao = questaoResp;
  //   })
  // }

  // atualizarQuestao(){
  //   this.questaoService.putQuestao(this.questao).subscribe((questaoResp: Questao) => {
  //     this.questao = questaoResp;
  //   })
  // }

  voltarPagina(){
    window.history.back();
  }

}
