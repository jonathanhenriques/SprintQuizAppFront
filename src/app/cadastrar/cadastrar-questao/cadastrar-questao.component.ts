import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alternativa } from 'src/app/model/Alternativa';
import { CategoriaProva } from 'src/app/model/CategoriaProva';
import { CategoriaQuestao } from 'src/app/model/CategoriaQuestao';
import { Prova } from 'src/app/model/Prova';
import { Questao } from 'src/app/model/Questao';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaProvaService } from 'src/app/service/categoria-prova.service';
import { CategoriaQuestaoService } from 'src/app/service/categoria-questao.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { QuestaoService } from 'src/app/service/questao.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-questao',
  templateUrl: './cadastrar-questao.component.html',
  styleUrls: ['./cadastrar-questao.component.scss']
})
export class CadastrarQuestaoComponent implements OnInit {

  usuario: Usuario = new Usuario();
  questao: Questao = new Questao();
  categoriaQuestao: CategoriaQuestao = new CategoriaQuestao();

  idProva: number = 0;
  idUsuario: number = environment.id;
  idCategoriaQuestao: number = 0;

  listaCategoriaQuestao: CategoriaQuestao[] = [];

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
    private lertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);


    AuthService.verificaLogado(this.alertas, this.router);

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

  findCategoriaQuestaoById(){
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

    
    // alert(this.questao.texto + ' | textoqes' + '\n' +
    // this.questao.ano + ' | data' + '\n' +
    // this.questao.imagem + ' | imagem' + '\n' +
    // this.questao.instituicao + ' | institui' + '\n' +
    // this.questao.alternativas + ' | alter' + '\n' +
    // this.questao.categoria.id + ' | idcat'  + '\n' +
    // this.questao.criador.id + ' | idcria'   + '\n' +
    // this.questao.resposta + ' | respo');

    // if(this.questao.texto == null)
    //   this.alertas.showAlertDanger('Preencha o campo texto')

    //   if(this.questao.instituicao == null)
    //   this.alertas.showAlertDanger('Preencha o campo isntituicao')

    //   if(this.questao.imagem == null)
    //   this.alertas.showAlertDanger('Preencha o campo imagem')

    //   if(this.questao.ano == null)
    //   this.alertas.showAlertDanger('Preencha o campo data')

    //   if(this.questao.categoria == null)
    //   this.alertas.showAlertDanger('Preencha o campo categoria')

    //   if(this.questao.criador == null)
    //   this.alertas.showAlertDanger('Preencha o campo criador')

      


    this.questaoService.postQuestao(this.questao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      this.alertas.showAlertSuccess('Questão criada com sucesso!');
      this.questao = new Questao();
   
    })
  }

}