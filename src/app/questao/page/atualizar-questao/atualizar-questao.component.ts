import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alternativa, createAlternativa } from 'src/app/alternativa/model/Alternativa';
import { CategoriaQuestao, createCategoriaQuestao } from 'src/app/categoria-questao/model/CategoriaQuestao';  
import { Prova } from 'src/app/prova/model/Prova';
import { Questao, createQuestao } from '../../model/Questao';
import { Usuario, createUsuario } from 'src/app/usuario/model/Usuario';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaQuestaoService } from 'src/app/categoria-questao/service/categoria-questao.service';
import { ProvaServiceService } from 'src/app/prova/service/prova-service.service';
import { QuestaoService } from '../../service/questao.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-atualizar-questao',
  templateUrl: './atualizar-questao.component.html',
  styleUrls: ['./atualizar-questao.component.scss']
})
export class AtualizarQuestaoComponent implements OnInit {

  usuario: Usuario = createUsuario();
  questao: Questao = createQuestao();
  // prova: Prova = new Prova();
  prova: Prova;
  categoriaQuestao: CategoriaQuestao = createCategoriaQuestao();
  alternativaDaResposta: Alternativa = createAlternativa();
  respostaQuestaoSelecionada: Alternativa = createAlternativa();
  respostaQuestaoSelecionadaId: number = 0;

  idUsuario: number = environment.id;
  idQuestao: number = 0;
  idProva: number = 0;
  idCategoriaQuestao: number = 0;
  tipoCategoria: number;
  respostaSelecionada: number = 0;


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

  ngOnInit() {
    window.scroll(0, 0);
    AuthService.verificaLogado(this.alertas, this.router);

    this.idQuestao = +this.activatedRoute.snapshot.params['id'];
    this.findAllCategoriaQuestao();
    this.findQuestaoById();
    console.log(this.questao.texto);
    

    
  }

  tu(){
    this.respostaQuestaoSelecionadaId = this.questao.resposta.id;
    console.log(this.respostaQuestaoSelecionadaId);
  }

  tipoDeCategoria(event: any) {
    this.tipoCategoria = event.target.value;
  }


  tipoDeUsuario(event: any) {
    // this.tipoUsuario = event.target.value;
    
  }





  selecaoResposta(event: any) {
    this.respostaSelecionada = event.target.value;
  }

  pegaCategoriaQuestaoSelecionada(event: any) {
    this.idCategoriaQuestao = event.target.value;
  }


  findAllCategoriaQuestao() {
    this.categoriaQuestaoService.getAllCategoriaQuestao().subscribe((categoriaQuestaoResp: CategoriaQuestao[]) => {
      this.listaCategoriaQuestao = categoriaQuestaoResp;
    })
  }

  findCategoriaQuestaoById() {
    this.categoriaQuestaoService.getByIdCategoriaQuestao(this.idCategoriaQuestao).subscribe((resp: CategoriaQuestao) => {
      this.categoriaQuestao = resp;
      // this.questao.categoria = resp;
    })
  }

  findQuestaoById() {
    this.questaoService.getByIdQuestao(this.idQuestao.valueOf()).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      this.tu();
    })

  }

  atualizarQuestao() {

    this.categoriaQuestao.id = this.tipoCategoria;
    this.questao.categoria = this.categoriaQuestao;
    // this.questao.categoria.id = this.tipoCategoria.valueOf();


    this.usuario.id = this.idUsuario;
    this.questao.criador = this.usuario

    this.respostaQuestaoSelecionada.id = this.respostaQuestaoSelecionadaId;
    this.questao.resposta = this.respostaQuestaoSelecionada;

    console.log(JSON.stringify(this.questao, null, 2));

    this.questaoService.putQuestao(this.questao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      this.alertas.showAlertSuccess('Questão atualizada com sucesso!');
      // this.router.navigate(['/cadastrar-prova']);
      this.questao = createQuestao();
      this.voltarPagina();

    })
  }

  voltarPagina() {
    window.history.back();
  }

}
