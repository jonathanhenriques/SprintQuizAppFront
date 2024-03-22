import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { createAlternativa, Alternativa } from '../../model/Alternativa';
import { createQuestao, Questao } from 'src/app/questao/model/Questao';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { AlternativaService } from '../../service/alternativa.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { QuestaoService } from 'src/app/questao/service/questao.service';

@Component({
  selector: 'app-cadastrar-alternativa',
  templateUrl: './cadastrar-alternativa.component.html',
  styleUrls: ['./cadastrar-alternativa.component.scss']
})
export class CadastrarAlternativaComponent implements OnInit {


  alternativa: Alternativa = createAlternativa();
  questao: Questao = createQuestao();
  idQuestao: number = 0;


  constructor(
    private alertas: AlertasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alternativaService: AlternativaService,
    private questaoService: QuestaoService
  ) { }

  ngOnInit() {
    // UsuarioService.verificaLogado(this.alertas, this.router);
    this.idQuestao = this.activatedRoute.snapshot.params['id'];
    console.log('idQuestao | ' + this.idQuestao);
    this.getQuestaoById();
  }

  a = {
    "id": 0,
    "texto": "uma",
    "foto": "string",
    "questao": { "id": 2 }
  }

  cadastrarAlternativa() {
    // this.questao.id = this.idQuestao;
    // console.log('questao id | ' + this.questao.id);
    // console.log('questao texto | ' + this.questao.texto);
    // this.alternativa.questao = this.questao;

    // console.log('alternativa.questao id | ' + this.alternativa.questao.id);
    // let obj = JSON.stringify(this.alternativa, null, 2);
    // console.log(obj);


    this.alternativa.questao = createQuestao();
    this.alternativa.questao.id = this.idQuestao;

    let obj = JSON.stringify(this.alternativa, null, 2);
    console.log(obj);



    this.alternativaService.postAlternativa(this.alternativa).subscribe((alternativaResp: Alternativa) => {
      this.alternativa = alternativaResp;
      this.alertas.showAlertSuccess('Alternativa criada com sucesso!');
      this.alternativa = createAlternativa();
    })
  }

  getQuestaoById() {
    this.questaoService.getByIdQuestao(this.idQuestao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
    })
  }

  // atualizarQuestao(){
  //   this.questaoService.putQuestao(this.questao).subscribe((questaoResp: Questao) => {
  //     this.questao = questaoResp;
  //   })
  // }

  voltarPagina() {
    window.history.back();
  }

}
