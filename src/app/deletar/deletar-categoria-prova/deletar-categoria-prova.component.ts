import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
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
    // private authService: AuthService,
    private categoriaProvaService: CategoriaProvaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    
    AuthService.verificaLogado(this.alertas, this.router);

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
