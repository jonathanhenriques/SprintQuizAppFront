import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-atualizar-alternativa',
  templateUrl: './atualizar-alternativa.component.html',
  styleUrls: ['./atualizar-alternativa.component.scss']
})
export class AtualizarAlternativaComponent implements OnInit {

  constructor(
    private alertas: AlertasService,
    private router: Router
  ) { }

  ngOnInit(){
    AuthService.verificaLogado(this.alertas, this.router);
  }

}
