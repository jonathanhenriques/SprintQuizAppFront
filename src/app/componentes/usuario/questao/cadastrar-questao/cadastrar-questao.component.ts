import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alternativa } from 'src/app/model/Alternativa';
import { CategoriaQuestao } from 'src/app/model/CategoriaQuestao';
import { Questao } from 'src/app/model/Questao';
import { QuestaoImpl } from 'src/app/model/QuestaoImpl';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AlternativaService } from 'src/app/service/alternativa.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaProvaService } from 'src/app/service/categoria-prova.service';
import { CategoriaQuestaoService } from 'src/app/service/categoria-questao.service';
import { QuestaoService } from 'src/app/service/questao.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-questao',
  templateUrl: './cadastrar-questao.component.html',
  styleUrls: ['./cadastrar-questao.component.scss']
})
export class CadastrarQuestaoComponent implements OnInit {

  usuario: Usuario = new Usuario();
  questao: Questao = new QuestaoImpl();
  categoriaQuestao: CategoriaQuestao = new CategoriaQuestao();
  alternativa: Alternativa = new Alternativa();
  respostaDaQuestao: Alternativa = new Alternativa();

  idProva: number = 0;
  idUsuario: number = environment.id;
  idCategoriaQuestao: number = 0;
  idRespostaDaQuestao: number = 0;

  listaCategoriaQuestao: CategoriaQuestao[] = [];

  //nao utilizados
  qtdItens: number = 3;
  listaAlternativas: Alternativa[] = [];
  listaVazia: Alternativa[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private questaoService: QuestaoService,
    private authService: AuthService,
    private categoriaProvaService: CategoriaProvaService,
    private categoriaQuestaoService: CategoriaQuestaoService,
    private lertas: AlertasService,
    private alternativaService: AlternativaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);


    AuthService.verificaLogado(this.alertas, this.router);
    this.questao.alternativas = [];

    this.findAllCategoriaQuestao();
    // this.findByIdUsuario();


  }

  // qtdAlternativas(qtd: number) {
  //   for (let i = 0; i < qtd; i++) {
  //     this.listaAlternativas.push(new Alternativa());
  //   }
  // }



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


  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;
      // alert(this.usuario.id);
    });
  }



  // qq: any = {

  //   "instituicao": "string",
  //   "ano": "2022-08-23",
  //   "imagem": "string",
  //   "texto": "string",
  //   "categoria": {"id": 1},
  //   "criador": {"id": 1}
  // }

  getAlternativaById() {
    this.alternativaService.getAlternativaById(this.idRespostaDaQuestao).subscribe((alternativaResp: Alternativa) => {
      this.respostaDaQuestao = alternativaResp;
    })
  }

  cadastrarAlternativa() {
    // this.questao.id = this.idQuestao;
    // console.log('questao id | ' + this.questao.id);
    // console.log('questao texto | ' + this.questao.texto);
    // this.alternativa.questao = this.questao;

    // console.log('alternativa.questao id | ' + this.alternativa.questao.id);
    // let obj = JSON.stringify(this.alternativa, null, 2);
    // console.log(obj);


    this.alternativa.questao = this.questao;

    let obj = JSON.stringify(this.alternativa, null, 2);
    console.log(obj);



    this.alternativaService.postAlternativa(this.alternativa).subscribe((alternativaResp: Alternativa) => {
      this.alternativa = alternativaResp;
      this.alertas.showAlertSuccess('Alternativa criada com sucesso!');
      // this.alternativa = new Alternativa();
    })
  }

  irAlternativa() {
    this.router.navigate(['cadastrar-alternativa', 1]);
  }

  vai() {

    this.procedimentoDeSalvarEColocarRespostaNaQuestaoCriada();

    this.respostaDaQuestao.id = this.questao.resposta.id;
    this.questao.alternativas.push(this.respostaDaQuestao);
   

    this.cadastrarQuestao();

    this.questao = new QuestaoImpl();
    this.alternativa = new Alternativa();
  }

  procedimentoDeSalvarEColocarRespostaNaQuestaoCriada() {
    this.alternativa.id = this.questao.id;
    this.questao.resposta = this.alternativa;

    this.questao.alternativas[0].id = this.alternativa.id;
    // const lista6: Alternativa[] = [this.alternativa]
    
    // this.questao.alternativas = []

    // this.questao.alternativas?.push(lista6[0]);

    // this.cadastrarQuestao();
    // this.cadastrarAlternativa();
    // this.findQuestaoById();
    // this.idRespostaDaQuestao = this.alternativa.id;
    // this.getAlternativaById();
    // this.questao.alternativas?.push(this.respostaDaQuestao);
    // this.cadastrarQuestao();

    // this.atualizarQuestao();

    // this.questao = new QuestaoImpl();
    // this.alternativa = new Alternativa();

  }

  findQuestaoById() {
    this.questaoService.getByIdQuestao(this.questao.id).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
    })
  }


  cadastrarQuestao() {


    this.categoriaQuestao.id = this.idCategoriaQuestao;
    this.questao.categoria = this.categoriaQuestao;


    this.usuario.id = this.idUsuario;
    this.questao.criador = this.usuario


    this.questaoService.postQuestao(this.questao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      this.alertas.showAlertSuccess('Questão criada com sucesso!');
      // this.adicionarAlternativaNaQuestaoCriada();
      // this.questao = new QuestaoImpl();

    })

    // this.cadastrarAlternativa();

    // this.questao = new QuestaoImpl();
  }

  atualizarQuestao() {

    // this.categoriaQuestao.id = this.tipoCategoria;
    // this.questao.categoria = this.categoriaQuestao;


    // this.usuario.id = this.idUsuario;
    // this.questao.criador = this.usuario

    // this.alternativaDaResposta.id = this.respostaSelecionada;
    // this.questao.resposta = this.alternativaDaResposta;

    console.log(JSON.stringify(this.questao, null, 2));

    this.questaoService.putQuestao(this.questao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      this.alertas.showAlertSuccess('Questão atualizada com sucesso!');
      // this.router.navigate(['/cadastrar-prova']);
      // this.questao = new QuestaoImpl();

    })
  }


  adicionarAlternativaNaQuestaoCriada() {
    console.log('crie uma resposta para a questao')
    this.router.navigate(['cadastrar-alternativa', this.questao.id]);
  }




}




