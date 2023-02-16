import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alternativa, createAlternativa } from 'src/app/alternativa/model/Alternativa';
import { CategoriaQuestao, createCategoriaQuestao } from 'src/app/categoria-questao/model/CategoriaQuestao';
import { Questao, createQuestao } from '../../model/Questao';
import { Usuario, createUsuario } from 'src/app/usuario/model/Usuario';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { AlternativaService } from 'src/app/alternativa/service/alternativa.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { CategoriaProvaService } from 'src/app/categoria-prova/service/categoria-prova.service';
import { CategoriaQuestaoService } from 'src/app/categoria-questao/service/categoria-questao.service';
import { QuestaoService } from '../../service/questao.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-questao',
  templateUrl: './cadastrar-questao.component.html',
  styleUrls: ['./cadastrar-questao.component.scss']
})
export class CadastrarQuestaoComponent implements OnInit {

  usuario: Usuario = createUsuario();
  questao: Questao = createQuestao();
  categoriaQuestao: CategoriaQuestao = createCategoriaQuestao();
  alternativa: Alternativa = createAlternativa();
  respostaDaQuestao: Alternativa = createAlternativa();
  retorno: Alternativa = createAlternativa();
  alternativaDaResposta: Alternativa = createAlternativa();
  alter: number = 0;

  idProva: number = 0;
  idUsuario: number = environment.id;
  idCategoriaQuestao: number = 0;
  idRespostaDaQuestao: number = 0;
  dificuldadeQuestao: number = 0;

  listaCategoriaQuestao: CategoriaQuestao[] = [];

  //nao utilizados
  qtdItens: number = 3;
  listaAlternativas: Alternativa[] = [];
  listaVazia: Alternativa[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private questaoService: QuestaoService,
    private UsuarioService: UsuarioService,
    private categoriaProvaService: CategoriaProvaService,
    private categoriaQuestaoService: CategoriaQuestaoService,
    private lertas: AlertasService,
    private alternativaService: AlternativaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);


    UsuarioService.verificaLogado(this.alertas, this.router);

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

  pegaDificuldade(event: any) {
    this.dificuldadeQuestao = event.target.value;
  }

  findAllCategoriaQuestao() {
    this.categoriaQuestaoService.getAllCategoriaQuestao().subscribe((categoriaQuestaoResp: CategoriaQuestao[]) => {
      this.listaCategoriaQuestao = categoriaQuestaoResp;
      console.log('buscou todas categoriaQuestao')
      console.log(this.listaCategoriaQuestao)
    })
  }

  findCategoriaQuestaoById() {
    this.categoriaQuestaoService.getByIdCategoriaQuestao(this.idCategoriaQuestao).subscribe((resp: CategoriaQuestao) => {
      this.categoriaQuestao = resp;
      // this.questao.categoria = resp;
    })
  }


  findByIdUsuario() {
    this.UsuarioService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
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

  getAlternativaByIdRetorno(id: number): Alternativa {
    let ret: Alternativa = createAlternativa();
    this.alternativaService.getAlternativaById(id).subscribe((alternativa: Alternativa) => {
      this.retorno = alternativa;
    }
    )
    return this.retorno;
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





  findQuestaoById() {
    this.questaoService.getByIdQuestao(this.questao.id).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
    })
  }

  salvarQuestao() {

    //   let q: Questao =  {
    //     id: null,
    //     instituicao: '',
    //     ano: null,
    //     texto: '',
    //     imagem: '',
    //     dificuldade: null,
    //     alternativas: null,
    //     resposta: null,
    //     categoriaQuestao: null,
    //     criador: null
    //  }

    console.log('idCategQues ' + this.idCategoriaQuestao)
    this.categoriaQuestao.id = this.idCategoriaQuestao;
    console.log('categoriaQuestao.id ' + this.categoriaQuestao.id)
    this.questao.categoria = this.categoriaQuestao;
    // console.log('q.c.id ' + this.questao.categoriaQuestao.id)


    console.log('idUsuario ')
    console.log('idUsuario ' + this.idUsuario)
    this.usuario.id = this.idUsuario;
    this.questao.criador = this.usuario

    this.questao.resposta = this.alternativa;


    // this.questao.alternativas = [];
    // const lis: Alternativa = this.questao.resposta;
    let { resposta } = this.questao;
    console.log(JSON.stringify(this.questao.resposta, null, 2));
    console.log(JSON.stringify(resposta, null, 2));
    // this.questao.alternativas.push(resposta);

    // this.alternativaDaResposta.id = this.questao.resposta.id;
    // this.questao.alternativas.push(this.alternativaDaResposta);

    console.log(JSON.stringify(this.questao, null, 2));

    this.postQuestao();

    // console.log(JSON.stringify(this.questao, null, 2));


  }

  buscaAlternativaParaQuestao() {

    // this.questao.alternativas = nome;
    // this.idRespostaDaQuestao = 3;
    // this.getAlternativaById();
    // let ar: Array<Alternativa> = new Array();
    // ar.push(this.questao.resposta);
    // this.questao.alternativas = ar;
    // console.log('texto da alter na lista de alternativas');
    // console.log(this.questao.alternativas?.[0]?.texto);
    // this.questao.alternativas.push(this.respostaDaQuestao);

    this.alternativaDaResposta.id = this.questao.resposta.id;
    this.questao.alternativas.push(this.alternativaDaResposta);


    console.log(JSON.stringify(this.questao.resposta, null, 2));
    this.questao.alternativas = [];
    const lis: Alternativa = this.questao.resposta;
    console.log(JSON.stringify(lis, null, 2));
    this.questao.alternativas.push(lis);
    console.log(JSON.stringify(this.questao, null, 2));
    this.voltarPagina();

    this.atualizarQuestao();

  }


  private postQuestao() {


    // this.categoriaQuestao.id = this.idCategoriaQuestao;
    // this.questao.categoria = this.categoriaQuestao;


    // this.usuario.id = this.idUsuario;
    // this.questao.criador = this.usuario


    this.questaoService.postQuestao(this.questao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      this.alertas.showAlertSuccess('Questão criada com sucesso!');
      // this.adicionarAlternativaNaQuestaoCriada();
      // this.questao = new QuestaoImpl();

    }, (error) => {
      if (error.status == 400) {
        console.log('Não foi possível cadastrar questao, revise');
      } else if (error.status == 500) {
        console.log('erro no console back');
      }
    })

    // this.cadastrarAlternativa();

    // this.questao = new QuestaoImpl();
    // this.alternativa = new Alternativa();
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



  voltarPagina() {
    window.history.back();
  }


}




