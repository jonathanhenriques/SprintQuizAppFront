import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alternativa } from 'src/app/model/Alternativa';
import { Questao } from 'src/app/model/Questao';
import { QuestaoImpl } from 'src/app/model/QuestaoImpl';
import { AlertasService } from 'src/app/service/alertas.service';
import { AlternativaService } from 'src/app/service/alternativa.service';
import { AuthService } from 'src/app/service/auth.service';
import { QuestaoService } from 'src/app/service/questao.service';


@Component({
  selector: 'app-remover-alternativa-da-questao',
  templateUrl: './remover-alternativa-da-questao.component.html',
  styleUrls: ['./remover-alternativa-da-questao.component.scss']
})
export class RemoverAlternativaDaQuestaoComponent implements OnInit {


  alternativa: Alternativa = new Alternativa();
  questao: Questao = new QuestaoImpl();
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

    this.idQuestao = this.activatedRouter.snapshot.params['id'];
    this.getQuestaoById();
    // this. criaListaAlternativas();

  }


  getQuestaoById() {
    this.questaoService.getByIdQuestao(4).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      console.log('achou');
      console.log(this.questao.id);
      console.log(questaoResp.instituicao);
    })
  }

  // criaListaAlternativas(){
  //   if(this.questao.alternativas?.length > 0){
  //     for(let i = 0; i < this.questao.alternativas?.length; i++) {
  //       this.listaAlternativas.push(this.questao.alternativas[i]);
  //       // console.log('posicao | ' + i);
  //     }
  //   }
  // }

  removerAlternativa(event: number) {

    this.alternativaService.deleteAlternativaById(event).subscribe(() => {
      this.toastr.success('Alternativa deletada com sucesso!');
      this.questao = new QuestaoImpl();

      this.voltarPagina();
    })
  }

  voltarPagina() {
    window.history.back();
  }

}
