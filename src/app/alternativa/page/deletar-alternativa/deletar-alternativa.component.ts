import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-deletar-alternativa',
  templateUrl: './deletar-alternativa.component.html',
  styleUrls: ['./deletar-alternativa.component.scss']
})
export class DeletarAlternativaComponent implements OnInit {

  constructor(
    private alertas: AlertasService,
    private router: Router
  ) { }

  ngOnInit(){
    AuthService.verificaLogado(this.alertas, this.router);
  }

}
