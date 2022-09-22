import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prova } from 'src/app/model/Prova';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';

@Component({
  selector: 'app-deletar-prova',
  templateUrl: './deletar-prova.component.html',
  styleUrls: ['./deletar-prova.component.scss']
})
export class DeletarProvaComponent implements OnInit {


  prova: Prova = new Prova();
  idProva: number = 0;

  constructor(
    private alertas: AlertasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private provaService: ProvaServiceService
  ) { }

  ngOnInit(){
    AuthService.verificaLogado(this.alertas, this.router);

    this.idProva = this.activatedRoute.snapshot.params['id'];
    this.findByIdProva();
    
  }

  findByIdProva(){
    this.provaService.getProvaById(this.idProva).subscribe((provaResp: Prova) => {
      this.prova = provaResp;
    })
  }

  deletarProva(){


    this.provaService.deleteProva(this.idProva).subscribe(() => {
      this.alertas.showAlertSuccess('Prova apagada com sucesso!');
      // this.router.navigate(['/cadastrar-prova']);
      this.voltarPagina();

    })
  }

  voltarPagina(){
    window.history.back();
  }

}
