import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-boas-vindas',
  templateUrl: './boas-vindas.component.html',
  styleUrls: ['./boas-vindas.component.scss']
})
export class BoasVindasComponent implements OnInit {



  constructor(
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0);
    if(environment.token == '') {
      this.alertas.showAlertDanger('Sua sessão expirou. Faça login novamente!');
      this.router.navigate(['/entrar']);
    }
  }




}
