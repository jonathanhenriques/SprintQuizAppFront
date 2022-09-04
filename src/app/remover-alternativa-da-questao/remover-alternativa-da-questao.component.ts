import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alternativa } from '../model/Alternativa';
import { Questao } from '../model/Questao';
import { AlertasService } from '../service/alertas.service';
import { AlternativaService } from '../service/alternativa.service';
import { AuthService } from '../service/auth.service';
import { QuestaoService } from '../service/questao.service';

@Component({
  selector: 'app-remover-alternativa-da-questao',
  templateUrl: './remover-alternativa-da-questao.component.html',
  styleUrls: ['./remover-alternativa-da-questao.component.scss']
})
export class RemoverAlternativaDaQuestaoComponent implements OnInit {

  
  alternativa: Alternativa = new Alternativa();
  questao: Questao = new Questao();
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

  ngOnInit(){
    window.scroll(0, 0);
    AuthService.verificaLogado(this.alertas, this.router);

    this.idQuestao = this.activatedRouter.snapshot.params['id'];
    this.getQuestaoById();
    this. criaListaAlternativas();

  }


  getQuestaoById(){
    this.questaoService.getByIdQuestao(this.idQuestao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
    })
  }

  criaListaAlternativas(){
    for(let i = 0; i < this.questao.alternativas?.length; i++) {
      this.listaAlternativas.push(this.questao.alternativas[i]);
      alert(i);
    }
  }

  removerAlternativa(id: number){
   

    this.alternativaService.deleteAlternativasById(id).subscribe(() => {
      this.toastr.success('Alternativa removida com sucesso!');
      this.voltarPagina();
    })

    // let as = this.questao.alternativas;
    // as.splice(id, 1);
    // console.log(as);
    // this.questao.alternativas = as;
    // console.log(JSON.stringify(this.questao))

    // this.questaoService.putQuestaoComAlternativa(this.questao).subscribe((questaoResp: Questao) => {
    //   this.questao = questaoResp;
    //   this.toastr.success('Alternativa removida com sucesso!');
    //   this.questao = new Questao();
    // })
  }

  voltarPagina(){
    window.history.back();
  }

}
