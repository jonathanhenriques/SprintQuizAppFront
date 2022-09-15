import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';
import { CategoriaProva } from '../../model/CategoriaProva';
import { AlertasService } from '../../../service/alertas.service';
import { CategoriaProvaService } from '../../../service/categoria-prova.service';

@Component({
  selector: 'app-categoria-prova',
  templateUrl: './deletar-categoria-prova.component.html',
  styleUrls: ['./deletar-categoria-prova.component.scss']
})
export class DeletarCategoriaProvaComponent implements OnInit {


  categoriaProva: CategoriaProva = new CategoriaProva();

  idCategoria: number;


  constructor(
    private router: Router,
    private alertas: AlertasService,
    private activatedRoute :ActivatedRoute,
    private categoriaProvaService: CategoriaProvaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    
    AuthService.verificaLogado(this.alertas, this.router);

    this.idCategoria = this.activatedRoute.snapshot.params['id'];

    this.findCategoriaProva();

  }

findCategoriaProva(){
  return this.categoriaProvaService.getByIdCategoriaProva(this.idCategoria).subscribe((categoriaProvaResp: CategoriaProva) => {
    this.categoriaProva = categoriaProvaResp;
  })
}

deletarCategoriaProva(){
  return this.categoriaProvaService.deleteCategoriaProva(this.idCategoria).subscribe(() => {
    this.alertas.showAlertSuccess('Categoria apagada com sucesso!');
    this.router.navigate(['/cadastrar-categoria-prova']);
  })
}

}
