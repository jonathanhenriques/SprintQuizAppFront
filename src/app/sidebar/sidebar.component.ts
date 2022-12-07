import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../shared/services/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { SubjectsService } from 'src/app/service/subjects.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

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
