import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { GuardaRespostasService } from '../../service/guarda-respostas.service';
import { ProvaServiceService } from 'src/app/prova/service/prova-service.service';
import { QuestaoService } from 'src/app/questao/service/questao.service';
import { environment } from 'src/environments/environment.prod';
import { Prova } from 'src/app/prova/model/Prova';
import { Usuario, createUsuario } from 'src/app/usuario/model/Usuario';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  usuario: Usuario = createUsuario();
  // prova: Prova = new Prova();
  prova: Prova
  idProva: number = 0;


  @Input() informacao: string = '';

  // @Input()quantidadeAcertos: number = 0;
  quantidadeAcertos: number = 0;
  quantidadeErros: number = 0;

  listaRespostasQuestoes: number[] = [];
  listaRespostas = GuardaRespostasService.listaRespostas;

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private authService: AuthService,
    private questaoService: QuestaoService,
    private provaService: ProvaServiceService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    AuthService.verificaLogado(this.alertas, this.router);
    this.usuario.id = environment.id;

    this.idProva = this.activatedRoute.snapshot.params['id'];

    this.findProvaById();
    // console.log('pegou | ' + this.prova.categoria.titulo);
    // console.log('tamanho | ' + this.prova.questoes.length);
    // this.prova.questoes?.map(q => this.listaRespostasQuestoes.push(q.questao.resposta.id));
    // this.encherLista();
    // this.verificaResultado();

    // console.log(this.listaRespostas[0])
    // this.quantidadeErros = this.listaRespostas[1];
  }

  findProvaById() {
    this.provaService.getProvaById(10).subscribe((provaResp: Prova) => {
      this.prova = provaResp;

      console.log(this.prova.questoes[1].questao.texto);
      this.encherLista();
    this.verificaResultado();

    })
    
  }

  encherLista() {
    for (let i = 0; i < this.prova.questoes.length; i++) {
      this.listaRespostasQuestoes.push(this.prova.questoes[i].questao?.resposta?.id!);
    }
  }







  verificaResultado() {
    for (let i = 0; i < this.listaRespostasQuestoes?.length; i++) {
      if (this.listaRespostas[i] == this.listaRespostasQuestoes[i]) {
        this.quantidadeAcertos++;
      } else {
        this.quantidadeErros++
      }
    }

  }

}
