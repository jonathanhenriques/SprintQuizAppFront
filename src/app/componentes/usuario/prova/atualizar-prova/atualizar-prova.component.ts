import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaProva, createCategoriaProva } from 'src/app/model/CategoriaProva';
import { Prova } from 'src/app/model/Prova';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaProvaService } from 'src/app/service/categoria-prova.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';

@Component({
  selector: 'app-atualizar-prova',
  templateUrl: './atualizar-prova.component.html',
  styleUrls: ['./atualizar-prova.component.scss']
})
export class AtualizarProvaComponent implements OnInit {

  pegouId: number = 0;

  // prova: Prova = new Prova();
  prova: Prova
  categoriaProva: CategoriaProva = createCategoriaProva();

  idProva: number = 0;
  idCategoriaProva: number = 0;

  listaCategoriaProva: CategoriaProva[] = [];

  constructor(
    private alertas: AlertasService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private provaService: ProvaServiceService,
    private categoriaProvaService: CategoriaProvaService
  ) { }

  ngOnInit() {
    AuthService.verificaLogado(this.alertas, this.router);

    this.idProva = this.activatedRoute.snapshot.params['id'];
    // alert(this.idProva + ' | idprova');
    this.findByIdProva();
    // alert(this.prova.nome + ' | nomeprova');
    this.findAllCategoriaProva();


  }

  findByIdProva() {
    this.provaService.getProvaById(this.idProva).subscribe((provaResp: Prova) => {
      this.prova = provaResp;
      // alert(this.prova.nome + ' | nomeprova');
    })
  }

  pegaCategoriaProvaSelecionada(event: any) {
    this.idCategoriaProva = event.target.value;
    this.findByICategoriaProva();

  }





  findByICategoriaProva() {
    this.categoriaProvaService.getByIdCategoriaProva(this.idCategoriaProva).subscribe((categoriaProvaResp: CategoriaProva) => {
      this.categoriaProva = categoriaProvaResp;
    })
  }

  findAllCategoriaProva() {
    this.categoriaProvaService.getAllCategoriaProva().subscribe((listaCategoriaProvaResp: CategoriaProva[]) => {
      this.listaCategoriaProva = listaCategoriaProvaResp;
    })
  }

  pegaId(id: number): number {
    this.pegouId = id;
    return id;
  }

  atualizarProva() {


    console.log(this.prova);
    console.log(this.categoriaProva);
    this.prova.categoria = this.categoriaProva;

    this.provaService.putProva(this.prova).subscribe((provaResp: Prova) => {
      this.prova = provaResp;
      this.alertas.showAlertSuccess('Prova atualizada com sucesso!');
      // this.router.navigate(['/cadastrar-prova']);
      // this.prova = new Prova();
      this.voltarPagina();

    })
  }

  voltarPagina() {
    window.history.back();
  }
}
