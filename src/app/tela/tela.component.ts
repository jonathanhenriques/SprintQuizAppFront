import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Prova } from '../model/Prova';
import { Questao } from '../model/Questao';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { ProvaServiceService } from '../service/prova-service.service';
import { QuestaoService } from '../service/questao.service';

@Component({
  selector: 'app-tela',
  templateUrl: './tela.component.html',
  styleUrls: ['./tela.component.scss']
})
export class TelaComponent implements OnInit {


  usuario: Usuario = new Usuario();
  questao: Questao = new Questao();
  prova: Prova = new Prova();

  contador: number = 0;
  qp: number = 0;

  idUsuario: number = environment.id;
  idQuestao: number = 0;
  idProva: number = 0;

  listaQuestoes: Questao[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private authService: AuthService,
    private questaoService: QuestaoService,
    private provaService: ProvaServiceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(){

    AuthService.verificaLogado(this.alertas, this.router);
    this.usuario.id = this.idUsuario;

    this.idQuestao = this.activatedRoute.snapshot.params['id'];
    this.idProva = this.activatedRoute.snapshot.params['id'];
    // this.findAllCategoriaQuestao();
    this.findQuestaoById();

    this.findByIdUsuario();
    this.findQuestoesByCriadorId();
    // this.listaQuestoes = this.usuario.questoes;
    
    
  }
  mais(){
    this.contador++;
  }

  menos(){
    this.contador--
  }

  maisqp(){
    this.qp++;
  }

  menosqp(){
    this.qp--
  }

  findProvaById(){
    this.provaService.getProvaById(this.idProva).subscribe((provaResp: Prova) => {
      this.prova = provaResp;
    })
  }

  findQuestaoById(){
    this.questaoService.getByIdQuestao(this.idQuestao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
    })
  }

  findQuestoesByCriadorId(){
    this.questaoService.getQuestoesByCriadorId(this.idUsuario).subscribe((listaQuestoesResp: Questao[]) =>{
      this.listaQuestoes = listaQuestoesResp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;
      // this.listaQuestoes = usuarioResp.questoes;
      // alert(this.listaQuestoes[0].texto);
      // this.listaQuestoes.forEach(e => {
      //   // alert(e instanceof Questao);
      //   // alert(e instanceof Usuario);
      //   alert(e instanceof Prova);
      // });
    })
  }

 


}
