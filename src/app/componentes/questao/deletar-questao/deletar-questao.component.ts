import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alternativa } from 'src/app/model/Alternativa';
import { CategoriaQuestao } from 'src/app/model/CategoriaQuestao';
import { Prova } from 'src/app/model/Prova';
import { Questao } from 'src/app/model/Questao';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { QuestaoService } from 'src/app/service/questao.service';

@Component({
  selector: 'app-deletar-questao',
  templateUrl: './deletar-questao.component.html',
  styleUrls: ['./deletar-questao.component.scss']
})
export class DeletarQuestaoComponent implements OnInit {
  questao: Questao ={
    id: 0,
    instituicao: '',
    ano: undefined,
    texto: '',
    imagem: '',
    alternativas: [],
    resposta: new Alternativa,
    categoria: new CategoriaQuestao,
    criador: new Usuario
  };;
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
