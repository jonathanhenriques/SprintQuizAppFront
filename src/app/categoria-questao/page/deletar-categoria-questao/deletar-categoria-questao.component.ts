import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaQuestao, createCategoriaQuestao } from '../../model/CategoriaQuestao';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { CategoriaQuestaoService } from '../../service/categoria-questao.service';

@Component({
  selector: 'app-deletar-categoria-questao',
  templateUrl: './deletar-categoria-questao.component.html',
  styleUrls: ['./deletar-categoria-questao.component.scss']
})
export class DeletarCategoriaQuestaoComponent implements OnInit {


  categoriaQuestao: CategoriaQuestao = createCategoriaQuestao();

  idCategoria: number = 0;


  constructor(
    private router: Router,
    private alertas: AlertasService,
    private activatedRoute: ActivatedRoute,
    private categoriaQuestaoService: CategoriaQuestaoService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);

    UsuarioService.verificaLogado(this.alertas, this.router);

    this.idCategoria = this.activatedRoute.snapshot.params['id'];

    this.findCategoriaQuestao();

  }

  findCategoriaQuestao() {
    return this.categoriaQuestaoService.getByIdCategoriaQuestao(this.idCategoria).subscribe((categoriaQuestaoResp: CategoriaQuestao) => {
      this.categoriaQuestao = categoriaQuestaoResp;
    })
  }

  deletarCategoriaQuestao() {
    return this.categoriaQuestaoService.deleteCategoriaQuestao(this.idCategoria).subscribe(() => {
      this.alertas.showAlertSuccess('Categoria apagada com sucesso!');
      this.router.navigate(['/cadastrar-categoria-questao']);
    })
  }

}


