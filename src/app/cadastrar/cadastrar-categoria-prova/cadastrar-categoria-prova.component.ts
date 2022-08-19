import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaProva } from 'src/app/model/CategoriaProva';
import { AlertasService } from 'src/app/service/alertas.service';
import { CategoriaProvaService } from 'src/app/service/categoria-prova.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-cadastrar-categoria-prova',
  templateUrl: './cadastrar-categoria-prova.component.html',
  styleUrls: ['./cadastrar-categoria-prova.component.scss']
})
export class CadastrarCategoriaProvaComponent implements OnInit {


  categoriaProva: CategoriaProva = new CategoriaProva();

  listaCategoriaProva: CategoriaProva[];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: CategoriaProva[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private categoriaProvaService: CategoriaProvaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    // if(environment.token == '') {
    //   this.alertas.showAlertDanger('Sua sessão expirou. Faça login novamente!');
    //   this.router.navigate(['/entrar']);
    // }


    this.findAllCategoriaProva();
    alert('oninit');
    
    // this.dataSource = this.listaCategoriaProva;

  }

  findAllCategoriaProva() {
    alert('finall');
    this.categoriaProvaService.getAllCategoriaProva().subscribe((resp: CategoriaProva[]) => {
      this.listaCategoriaProva = resp;
      alert(this.listaCategoriaProva.length);
      alert('retorno');
    })
    alert('saiu');
  }

  cadastrarCategoria() {
    alert(this.categoriaProva.titulo);
    alert(this.categoriaProva.descritivos);
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
