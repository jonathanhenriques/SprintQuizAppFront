import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alternativa } from 'src/app/componentes/model/Alternativa';
import { CategoriaProva } from 'src/app/componentes/model/CategoriaProva';
import { CategoriaQuestao } from 'src/app/componentes/model/CategoriaQuestao';
import { Prova } from 'src/app/componentes/model/Prova';
import { Questao } from 'src/app/componentes/model/Questao';
import { Usuario } from 'src/app/componentes/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AlternativaService } from 'src/app/service/alternativa.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaProvaService } from 'src/app/service/categoria-prova.service';
import { CategoriaQuestaoService } from 'src/app/service/categoria-questao.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { QuestaoService } from 'src/app/service/questao.service';
import { environment } from 'src/environments/environment.prod';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-atualizar-questao-com-alternativa',
  templateUrl: './atualizar-questao-com-alternativa.component.html',
  styleUrls: ['./atualizar-questao-com-alternativa.component.scss']
})
export class AtualizarQuestaoComAlternativaComponent implements OnInit {


  // usuario: Usuario = new Usuario();
  // questao: Questao = new Questao();
  // prova: Prova = new Prova();
  // alternativa: Alternativa = new Alternativa();
  // categoriaQuestao: CategoriaQuestao = new CategoriaQuestao();

  // idUsuario: number = environment.id;
  // idQuestao: number = 0;
  // idProva: number = 0;
  // idCategoriaQuestao: number = 0;


  // listaCategoriaQuestao: CategoriaQuestao[] = [];
  // listaAlternativas: Alternativa[] = [];


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

  findCategoriaQuestaoById(){
    this.categoriaQuestaoService.getByIdCategoriaQuestao(this.idCategoriaQuestao).subscribe((resp: CategoriaQuestao) => {
      this.categoriaQuestao = resp;
      // this.questao.categoria = resp;
    })
  }

  findQuestaoById(){
    this.questaoService.getByIdQuestao(this.idQuestao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
    })
  }

  atualizarQuestao(){

    this.categoriaQuestao.id = this.idCategoriaQuestao;
    this.questao.categoria = this.categoriaQuestao;
    

    this.usuario.id = this.idUsuario;
    this.questao.criador = this.usuario

    this.questaoService.putQuestao(this.questao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      this.alertas.showAlertSuccess('Questão atualizada com sucesso!');
      // this.router.navigate(['/cadastrar-prova']);
      this.questao = new Questao();
      this.voltarPagina();

    })
  }

  removerAlternativa(id: number){
    // this.questao.alternativas.(id, 1);
    // this.findQuestaoById();
  }

  voltarPagina(){
    window.history.back();
  }

}
