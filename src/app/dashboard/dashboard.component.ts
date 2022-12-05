import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  nomeUsuario: string = environment.nome;
  constructor(
    private alertas: AlertasService,
    private router: Router,
    
  ) { }

  ngOnInit() {
    AuthService.verificaLogado(this.alertas, this.router);
  }

}
