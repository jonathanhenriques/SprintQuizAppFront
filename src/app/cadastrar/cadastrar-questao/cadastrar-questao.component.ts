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

    // this.findAllCategoriaProva();
    this.findByIdUsuario();
    // this.findByICategoriaProva();
    this.findAllCategoriaQuestao();
    this.qtdAlternativas(3);

  }

  qtdAlternativas(qtd: number) {
    for (let i = 0; i < qtd; i++) {
      this.listaAlternativas.push(new Alternativa());
    }
  }



  pegaCategoriaQuestaoSelecionada(event: any) {
    this.idCategoriaQuestao = event.target.value;
  }

  findAllCategoriaQuestao() {
    this.categoriaQuestaoService.getAllCategoriaQuestao().subscribe((categoriaQuestaoResp: CategoriaQuestao[]) => {
      this.listaCategoriaQuestao = categoriaQuestaoResp;
    })
  }


  findByIdUsuario() {
    this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;
    });
  }

//   q: any = {
//     "texto": "22222222",
//     "categoria": {"id": 1},
//     "criador": {"id": 1}
// }


  cadastrarQuestao() {


    this.categoriaQuestao.id = this.idCategoriaQuestao;
    this.questao.categoria = this.categoriaQuestao;

    this.usuario.id = this.idUsuario;
    this.questao.criador = this.usuario
    
    // alert(this.questao.texto + ' | textoqes');
    // alert(this.questao.ano + ' | data');
    // alert(this.questao.imagem + ' | imagem');
    // alert(this.questao.instituicao + ' | institui');
    // alert(this.questao.categoria.id + ' | idcat');
    // alert(this.questao.criador.id + ' | idcria');
    // alert(this.questao.resposta + ' | respo');

    this.questaoService.postQuestao(this.questao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      this.alertas.showAlertSuccess('Questão criada com sucesso!');
      this.alertas.showAlertSuccess(questaoResp.texto + 'texto questãoresp cadastra');
      this.alertas.showAlertSuccess(this.questao.texto + 'texto questão cadastra');
    })
  }

}
