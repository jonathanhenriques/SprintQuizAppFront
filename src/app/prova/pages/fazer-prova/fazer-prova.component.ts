import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Questao, createQuestao } from 'src/app/questao/model/Questao';
import { ProvaServiceService } from '../../service/prova-service.service';
import { Prova } from '../../model/Prova';
import { QuestaoService } from 'src/app/questao/service/questao.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fazer-prova',
  templateUrl: './fazer-prova.component.html',
  styleUrls: ['./fazer-prova.component.scss'],
})
export class FazerProvaComponent implements OnInit {
  listaQuestoes: Questao[] = [];
  prova: Prova;
  listaIdsQuestoes: number[] = [];
  idProva: number = 0;
  backgroundColor: 'red';
  constructor(
    private activatedRoute: ActivatedRoute,
    private provaService: ProvaServiceService,
    private questaoService: QuestaoService
  ) {}

  ngOnInit(): void {
    this.idProva = this.activatedRoute.snapshot.params['id'];
    this.getProvaById(this.idProva);
    // this.buscaListaQuestoes(this.listaIdsQuestoes);
  }

  getProvaById(id: number) {
    this.provaService.getProvaById(id).subscribe((prova: Prova) => {
      this.prova = prova;
      console.log(JSON.stringify(prova, null, 2));

      this.buscarQuestoesDeProva();
    });
  }

  buscarQuestoesDeProva(){
    if(this.prova.questoes != null){
      for(let j = 0; j < this.prova.questoes.length; j++){
        this.listaIdsQuestoes.push(this.prova.questoes[j].id);
        console.log(this.prova.questoes[j].id);
      }
      // this.listaQuestoes = this.prova.questoes;

      this.buscaListaQuestoes(this.listaIdsQuestoes);
    }
    // if(this.prova.questoes.length === 0)
    //   console.warn('chamouuuuu')
    // else
    //   console.log('nao vazio')
    // console.log(JSON.stringify(this.prova.questoes, null, 2))
  }

  buscaQuestaoPorId(id: number): Observable<Questao>{
    return this.questaoService.getByIdQuestao(id)
    //  .subscribe((questao: Questao) => {
    //   console.log('chamou')
    //   console.log(JSON.stringify(questao, null, 2))
    //   return questao;
    // })
  }

  buscaListaQuestoes(questoes: number[]){
    for(let j = 0; j < questoes.length; j++){
      const questao = this.buscaQuestaoPorId(questoes[j]).subscribe((questao: Questao) => {
        console.log('questap***' + JSON.stringify(questao, null, 2))
      this.listaQuestoes.push(questao)
      console.log('buscaListaQuestoes++++++')
      console.log(JSON.stringify(this.listaQuestoes[j], null, 2))
      })

      // console.log(JSON.stringify(this.listaQuestoes[j].texto))
    }

  }

  montaProvaComQuestoes(){
    this.prova.questoes = null;
    this.prova.questoes = this.listaQuestoes;
  }


}
