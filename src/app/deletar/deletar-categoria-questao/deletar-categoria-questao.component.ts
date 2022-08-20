import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-deletar-categoria-questao',
  templateUrl: './deletar-categoria-questao.component.html',
  styleUrls: ['./deletar-categoria-questao.component.scss']
})
export class DeletarCategoriaQuestaoComponent implements OnInit {

  constructor(
    private alertas: AlertasService,
    private router: Router
  ) { }

  ngOnInit(){
    AuthService.verificaLogado(this.alertas, this.router);
  }

}
