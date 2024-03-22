import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Questao, createQuestao } from 'src/app/questao/model/Questao';

@Component({
  selector: 'app-fazer-prova',
  templateUrl: './fazer-prova.component.html',
  styleUrls: ['./fazer-prova.component.scss']
})
export class FazerProvaComponent implements OnInit {

  listaQuestoes: Questao[] = [];
  // prova: Prova = 
  idProva: number = 0
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.idProva = this.activatedRoute.snapshot.params['id'];
  }

  getProvaById(id: number) {

  }

}
