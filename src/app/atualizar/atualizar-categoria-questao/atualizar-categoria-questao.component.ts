import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaQuestao } from 'src/app/model/CategoriaQuestao';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaQuestaoService } from 'src/app/service/categoria-questao.service';

@Component({
  selector: 'app-atualizar-categoria-questao',
  templateUrl: './atualizar-categoria-questao.component.html',
  styleUrls: ['./atualizar-categoria-questao.component.scss']
})
export class AtualizarCategoriaQuestaoComponent implements OnInit {
  categoriaQuestao: CategoriaQuestao = new CategoriaQuestao();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private alertas: AlertasService,
    private categoriaQuestaoService: CategoriaQuestaoService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    // if (environment.token == '') {
    //   this.alertas.showAlertDanger('Sua sessão expirou. Faça login novamente!');
    //   this.router.navigate(['/entrar']);

    // }

    AuthService.verificaLogado(this.alertas, this.router);

    let id: number = this.activatedRoute.snapshot.params['id'];
    this.findByIdCategoriaProvaService(id);


  }


  findByIdCategoriaProvaService(id: number) {
    {
      this.categoriaQuestaoService.getByIdCategoriaQuestao(id).subscribe((categoriaQuestaoResp: CategoriaQuestao) => {
        this.categoriaQuestao = categoriaQuestaoResp;

      })
    }
  }

  putCategoria() {
    this.categoriaQuestaoService.putCategoriaQuestao(this.categoriaQuestao).subscribe((categoriaQuestaoResp: CategoriaQuestao) => {
      this.categoriaQuestao = categoriaQuestaoResp;
      this.alertas.showAlertSuccess('Categoria atualizada com sucesso!');

      this.router.navigate(['/cadastrar-categoria-questao']);

    })
  }
}
