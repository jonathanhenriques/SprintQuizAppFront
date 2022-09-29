import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // @Input('men') val: any;
  // @ViewChild('drawer')drawer: HTMLElement;

  @Output()informacao: string = 'Nome: Jonathan';

  idUsuario = environment.id;
  constructor(public authService: AuthService,
    private alertas: AlertasService,
    private router: Router) { }

  ngOnInit(){
    // AuthService.verificaLogado(this.alertas, this.router);
  }











}
