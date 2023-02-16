import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaProva, createCategoriaProva } from '../../model/CategoriaProva';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { CategoriaProvaService } from '../../service/categoria-prova.service';

@Component({
  selector: 'app-atualizar-categoria-prova',
  templateUrl: './atualizar-categoria-prova.component.html',
  styleUrls: ['./atualizar-categoria-prova.component.scss']
})
export class AtualizarCategoriaProvaComponent implements OnInit {


  categoriaProva: CategoriaProva = createCategoriaProva();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertas: AlertasService,
    private categoriaProvaService: CategoriaProvaService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    // if (environment.token == '') {
    //   this.alertas.showAlertDanger('Sua sessão expirou. Faça login novamente!');
    //   this.router.navigate(['/entrar']);

    // }

    UsuarioService.verificaLogado(this.alertas, this.router);

    let id: number = this.activatedRoute.snapshot.params['id'];
    this.findByIdCategoriaProvaService(id);


  }


  findByIdCategoriaProvaService(id: number) {
    {
      this.categoriaProvaService.getByIdCategoriaProva(id).subscribe((categoriaProvaresp: CategoriaProva) => {
        this.categoriaProva = categoriaProvaresp;

      })
    }
  }

  putCategoriaProva() {
    this.categoriaProvaService.putCategoriaProva(this.categoriaProva).subscribe((categoriaProvaResp: CategoriaProva) => {
      this.categoriaProva = categoriaProvaResp;
      this.alertas.showAlertSuccess('Categoria atualizada com sucesso!');

      this.router.navigate(['/cadastrar-categoria-prova']);

    })
  }



}
