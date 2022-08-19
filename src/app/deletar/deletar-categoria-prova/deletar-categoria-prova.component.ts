import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { CategoriaProva } from '../../model/CategoriaProva';
import { AlertasService } from '../../service/alertas.service';
import { CategoriaProvaService } from '../../service/categoria-prova.service';

@Component({
  selector: 'app-categoria-prova',
  templateUrl: './deletar-categoria-prova.component.html',
  styleUrls: ['./deletar-categoria-prova.component.scss']
})
export class DeletarCategoriaProvaComponent implements OnInit {


  categoria: CategoriaProva = new CategoriaProva();

  listaCategoriaProva: CategoriaProva[];

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

  }

findAllCategoriaProva(){
  return this.categoriaProvaService.getAllCategoriaProva().subscribe((categorias: CategoriaProva[]) => {
    this.listaCategoriaProva = categorias;
  })
}

puCategoriaProva(categoriaProva: CategoriaProva){
  return this.categoriaProvaService.putCategoriaProva(categoriaProva).subscribe((categoria: CategoriaProva) => {

  })
}

}
