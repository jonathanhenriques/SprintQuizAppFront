import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prova } from 'src/app/model/Prova';
import { Questao } from 'src/app/model/Questao';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { QuestaoService } from 'src/app/service/questao.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-mural-questoes',
  templateUrl: './mural-questoes.component.html',
  styleUrls: ['./mural-questoes.component.scss']
})
export class MuralQuestoesComponent implements OnInit {

 @Input() objson: string;

  usuario: Usuario = new Usuario();
  questao: Questao = new Questao();
  prova: Prova = new Prova();


  idUsuario: number = environment.id;
  idQuestao: number = 0;

  listaQuestoes: Questao[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private authService: AuthService,
    private questaoService: QuestaoService,
    private provaService: ProvaServiceService
  ) { }

  ngOnInit(){

    AuthService.verificaLogado(this.alertas, this.router);
    this.usuario.id = this.idUsuario;
    this.findByIdUsuario();
    this.findQuestoesByCriadorId();
    // this.listaQuestoes = this.usuario.questoes;
    
    
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
