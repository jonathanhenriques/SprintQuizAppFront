import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prova } from 'src/app/model/Prova';
import { ProvaServiceService } from 'src/app/service/prova-service.service';

@Component({
  selector: 'app-galeriaprovas',
  templateUrl: './galeria-provas.component.html',
  styleUrls: ['./galeria-provas.component.scss']
})
export class GaleriaProvasComponent implements OnInit {

  prova: Prova = new Prova();
  idProva: number = 0;

  constructor(private provaService: ProvaServiceService,
  private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.idProva = this.activatedRoute.snapshot.params['id'];
    this.findProvaId();
    alert('Olá, ' + this.prova.nome);
  }

  findProvaId(){
    return this.provaService.getProvaById(this.idProva).subscribe((provaResp: Prova) => {
      this.prova = provaResp;
    })
  }

}
