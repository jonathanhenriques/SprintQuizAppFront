import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaQuestao } from 'src/app/model/CategoriaQuestao';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaQuestaoService } from 'src/app/service/categoria-questao.service';

@Component({
  selector: 'app-cadastrar-categoria-questao',
  templateUrl: './cadastrar-categoria-questao.component.html',
  styleUrls: ['./cadastrar-categoria-questao.component.scss']
})
export class CadastrarCategoriaQuestaoComponent implements OnInit {

  categoriaQuestao: CategoriaQuestao = new CategoriaQuestao();

  listaCategoriaQuestao: CategoriaQuestao[];

  

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private categoriaQuestaoService: CategoriaQuestaoService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
   
    AuthService.verificaLogado(this.alertas, this.router);


    this.findAllCategoriaQuestao();
    

  }

  findAllCategoriaQuestao() {
    this.categoriaQuestaoService.getAllCategoriaQuestao().subscribe((categoriaQuestaoResp: CategoriaQuestao[]) => {
      this.listaCategoriaQuestao = categoriaQuestaoResp;
    })
  }

  cadastrarCategoriaQuestao() {
    this.categoriaQuestaoService.postCategoriaQuestao(this.categoriaQuestao).subscribe((categoriaQuestaoResp: CategoriaQuestao) => {
      this.categoriaQuestao = categoriaQuestaoResp;

      this.findAllCategoriaQuestao();
      this.categoriaQuestao = new CategoriaQuestao();

    })

    this.alertas.showAlertSuccess('Nova Categoria cadastrada com sucesso!');
  }
}
