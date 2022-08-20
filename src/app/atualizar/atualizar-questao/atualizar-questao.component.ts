import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-atualizar-questao',
  templateUrl: './atualizar-questao.component.html',
  styleUrls: ['./atualizar-questao.component.scss']
})
export class AtualizarQuestaoComponent implements OnInit {

  constructor(
    private alertas: AlertasService,
    private router: Router
  ) { }

  ngOnInit(){
    AuthService.verificaLogado(this.alertas, this.router);
  }

}
