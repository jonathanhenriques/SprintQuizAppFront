import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { SubjectsService } from 'src/app/service/subjects.service';
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
    private router: Router,
    private subjectsService: SubjectsService
    ) { }

  ngOnInit(){
    // AuthService.verificaLogado(this.alertas, this.router);
  }


  
  secaoEncerrada() {
    environment.token = '';
    environment.id = 0;
    environment.nome = '';
    environment.foto = '';
    environment.tipo = '';
    this.subjectsService.ocultarMenuHeader.next(false);
    this.router.navigate(['/entrar']);
  }



}
