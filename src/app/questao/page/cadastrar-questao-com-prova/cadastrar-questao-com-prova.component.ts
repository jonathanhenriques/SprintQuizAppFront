import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Alternativa } from 'src/app/alternativa/model/Alternativa';
import { CategoriaQuestao, createCategoriaQuestao } from 'src/app/categoria-questao/model/CategoriaQuestao';  
import { Prova } from 'src/app/prova/model/Prova';
import { Questao, createQuestao } from '../../model/Questao';
import { QuestaoProva, createQuestaoProva } from 'src/app/questao-prova/model/QuestaoProva';
import { Usuario, createUsuario } from 'src/app/usuario/model/Usuario';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaProvaService } from 'src/app/categoria-prova/service/categoria-prova.service';
import { CategoriaQuestaoService } from 'src/app/categoria-questao/service/categoria-questao.service';
import { QuestaoProvaService } from 'src/app/questao-prova/service/questao-prova.service';
import { QuestaoService } from '../../service/questao.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-questao-com-prova',
  templateUrl: './cadastrar-questao-com-prova.component.html',
  styleUrls: ['./cadastrar-questao-com-prova.component.scss']
})
export class CadastrarQuestaoComProvaComponent implements OnInit {

  usuario: Usuario = createUsuario();
  questao: Questao = createQuestao();
  categoriaQuestao: CategoriaQuestao = createCategoriaQuestao();
  // prova: Prova = new Prova();
  prova: Prova;
  questaoProva: QuestaoProva = createQuestaoProva();

  idProva: number = 0;
  idUsuario: number = environment.id;
  idCategoriaQuestao: number = 0;

  @Input() idProvaEscolhida: number = 0;

  listaCategoriaQuestao: CategoriaQuestao[] = [];

  //nao utilizados
  qtdItens: number = 3;
  listaAlternativas: Alternativa[] = [];
  listaVazia: Alternativa[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertas: AlertasService,
    private questaoService: QuestaoService,
    private questaoProvaService: QuestaoProvaService,
    private authService: AuthService,
    private categoriaProvaService: CategoriaProvaService,
    private categoriaQuestaoService: CategoriaQuestaoService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);


    AuthService.verificaLogado(this.alertas, this.router);

    this.findAllCategoriaQuestao();
    // this.idProva = this.activatedRoute.snapshot.params['id'];
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


  cadastrarQuestao() {


    this.categoriaQuestao.id = this.idCategoriaQuestao;
    this.questao.categoria = this.categoriaQuestao;


    this.usuario.id = this.idUsuario;
    this.questao.criador = this.usuario

    this.prova.id = this.idProvaEscolhida;
    this.questaoProva.prova = this.prova;



    this.questaoService.postQuestao(this.questao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      this.toastr.success('Questão criada com sucesso!');
      console.log(this.questao.id);
      this.questaoProva.questao.id = questaoResp.id;

    })



    console.log(JSON.stringify(this.questaoProva, null, 2))




  }

  postarQuestaoProva() {
    this.questaoProvaService.postQuestaoProva(this.questaoProva, this.idProvaEscolhida).subscribe((questaoProvaResp: QuestaoProva) => {
      this.questaoProva = questaoProvaResp;
      this.toastr.success('Questão adicionada a Prova com sucesso!');
      this.questaoProva = createQuestaoProva();
      this.questao = createQuestao();
    })
  }

}