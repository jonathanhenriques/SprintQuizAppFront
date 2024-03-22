import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { CategoriaProva } from '../../model/CategoriaProva';
import { CategoriaProvaService } from '../../service/categoria-prova.service';

@Component({
  selector: 'app-categoria-prova',
  templateUrl: './deletar-categoria-prova.component.html',
  styleUrls: ['./deletar-categoria-prova.component.scss']
})
export class DeletarCategoriaProvaComponent implements OnInit {


  categoriaProva!: CategoriaProva;

  idCategoria: number = 0;


  constructor(
    private router: Router,
    private alertas: AlertasService,
    private activatedRoute: ActivatedRoute,
    private categoriaProvaService: CategoriaProvaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    // UsuarioService.verificaLogado(this.alertas, this.router);

    this.idCategoria = this.activatedRoute.snapshot.params['id'];

    this.findCategoriaProva();

  }

  findCategoriaProva() {
    return this.categoriaProvaService.getByIdCategoriaProva(this.idCategoria).subscribe((categoriaProvaResp: CategoriaProva) => {
      this.categoriaProva = categoriaProvaResp;
    })
  }

  deletarCategoriaProva() {
    return this.categoriaProvaService.deleteCategoriaProva(this.idCategoria).subscribe(() => {
      this.alertas.showAlertSuccess('Categoria apagada com sucesso!');
      this.router.navigate(['/cadastrar-categoria-prova']);
    })
  }

}
