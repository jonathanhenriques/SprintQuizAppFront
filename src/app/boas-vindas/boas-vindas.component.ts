import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../shared/services/alertas.service';
import { CategoriaProvaService } from '../categoria-prova/service/categoria-prova.service';
import { CategoriaProva } from '../categoria-prova/model/CategoriaProva';

@Component({
  selector: 'app-boas-vindas',
  templateUrl: './boas-vindas.component.html',
  styleUrls: ['./boas-vindas.component.scss']
})
export class BoasVindasComponent implements OnInit {

  lista: any = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private categoriaProvaService: CategoriaProvaService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    // if(environment.token == '') {
    //   this.alertas.showAlertDanger('Sua sessão expirou. Faça login novamente!');
    //   this.router.navigate(['/entrar']);
    // }

    // UsuarioService.verificaLogado(this.alertas, this.router);
  }


  irPara(caminho: string) {
    this.router.navigate(['nav/' + caminho]);
  }

  findByIdCategoriaProvaService() {
    {
      this.categoriaProvaService.getAllCategoriaProva1().subscribe((categoriaProvaresp: CategoriaProva[]) => {
        this.lista = categoriaProvaresp;

      })
    }
  }




}
