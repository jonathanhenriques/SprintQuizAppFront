import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alternativa } from 'src/app/model/Alternativa';
import { CategoriaQuestao } from 'src/app/model/CategoriaQuestao';
import { Prova } from 'src/app/model/Prova';
import { Questao } from 'src/app/model/Questao';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaQuestaoService } from 'src/app/service/categoria-questao.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { QuestaoService } from 'src/app/service/questao.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-atualizar-questao',
  templateUrl: './atualizar-questao.component.html',
  styleUrls: ['./atualizar-questao.component.scss']
})
export class AtualizarQuestaoComponent implements OnInit {

  usuario: Usuario = new Usuario();
  questao: Questao = new Questao();
  prova: Prova = new Prova();
  categoriaQuestao: CategoriaQuestao = new CategoriaQuestao();

  idUsuario: number = environment.id;
  idQuestao: number = 0;
  idProva: number = 0;
  idCategoriaQuestao: number = 0;


  listaCategoriaQuestao: CategoriaQuestao[] = [];
  listaAlternativas: Alternativa[] = [];




  constructor(
    private alertas: AlertasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private provaService: ProvaServiceService,
    private questaoService: QuestaoService,
    private categoriaQuestaoService: CategoriaQuestaoService
  ) { }

  ngOnInit(){
    window.scroll(0,0);
    AuthService.verificaLogado(this.alertas, this.router);

    this.idQuestao = this.activatedRoute.snapshot.params['id'];
    this.findAllCategoriaQuestao();
    this.findQuestaoById();
  }

  pegaCategoriaQuestaoSelecionada(event: any){
    this.idCategoriaQuestao = event.target.value;
  }


  findAllCategoriaQuestao(){
    this.categoriaQuestaoService.getAllCategoriaQuestao().subscribe((categoriaQuestaoResp: CategoriaQuestao[]) => {
      this.listaCategoriaQuestao = categoriaQuestaoResp;
    })
  }

  findQuestaoById(){
    this.questaoService.getByIdQuestao(this.idQuestao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
    })
  }

  atualizarQuestao(){


    this.questaoService.putQuestao(this.questao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      this.alertas.showAlertSuccess('Questão atualizada com sucesso!');
      // this.router.navigate(['/cadastrar-prova']);
      this.questao = new Questao();
      this.voltarPagina();

    })
  }

  voltarPagina(){
    window.history.back();
  }

}
