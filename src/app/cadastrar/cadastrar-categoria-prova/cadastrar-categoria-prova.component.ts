import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaProva } from 'src/app/model/CategoriaProva';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaProvaService } from 'src/app/service/categoria-prova.service';
import { MatTableModule } from '@angular/material/table';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-cadastrar-categoria-prova',
  templateUrl: './cadastrar-categoria-prova.component.html',
  styleUrls: ['./cadastrar-categoria-prova.component.scss']
})
export class CadastrarCategoriaProvaComponent implements OnInit {


  categoriaProva: CategoriaProva = new CategoriaProva();

  listaCategoriaProva: CategoriaProva[];

  

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
    AuthService.verificaLogado(this.alertas, this.router);


    this.findAllCategoriaProva();
    

  }

  findAllCategoriaProva() {
    this.categoriaProvaService.getAllCategoriaProva().subscribe((resp: CategoriaProva[]) => {
      this.listaCategoriaProva = resp;
    })
  }

  cadastrarCategoriaProva() {
    this.categoriaProvaService.postCategoriaProva(this.categoriaProva).subscribe((categoriaProvaResp: CategoriaProva) => {
      this.categoriaProva = categoriaProvaResp;

      this.findAllCategoriaProva();
      this.categoriaProva = new CategoriaProva();

    })

    this.alertas.showAlertSuccess('Nova Categoria cadastrada com sucesso!');
  }

  // puCategoriaProva(categoriaProva: CategoriaProva){
  //   return this.categoriaProvaService.putCategoriaProva(categoriaProva).subscribe((categoria: CategoriaProva) => {

  //   })
  // }

}
