import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prova } from '../../model/Prova';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { ProvaServiceService } from '../../service/prova-service.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';

@Component({
  selector: 'app-deletar-prova',
  templateUrl: './deletar-prova.component.html',
  styleUrls: ['./deletar-prova.component.scss']
})
export class DeletarProvaComponent implements OnInit {


  // prova: Prova = new Prova();
  prova: Prova;
  idProva: number = 0;

  constructor(
    private alertas: AlertasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private provaService: ProvaServiceService
  ) { }

  ngOnInit() {
    UsuarioService.verificaLogado(this.alertas, this.router);

    this.idProva = this.activatedRoute.snapshot.params['id'];
    this.findByIdProva();

  }

  findByIdProva() {
    this.provaService.getProvaById(this.idProva).subscribe((provaResp: Prova) => {
      this.prova = provaResp;
    })
  }

  deletarProva() {


    this.provaService.deleteProva(this.idProva).subscribe(() => {
      this.alertas.showAlertSuccess('Prova apagada com sucesso!');
      this.voltarPagina();

    })
  }

  voltarPagina() {
    window.history.back();
  }

}
