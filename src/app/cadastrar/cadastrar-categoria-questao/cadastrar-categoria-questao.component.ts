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

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: CategoriaQuestao[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private categoriaQuestaoService: CategoriaQuestaoService,
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    // if(environment.token == '') {
    //   this.alertas.showAlertDanger('Sua sessão expirou. Faça login novamente!');
    //   this.router.navigate(['/entrar']);
    // }
    AuthService.verificaLogado(this.alertas, this.router);


    this.findAllCategoriaProva();
    
    // this.dataSource = this.listaCategoriaProva;

  }

  findAllCategoriaProva() {
    this.categoriaQuestaoService.getAllCategoriaQuestao().subscribe((resp: CategoriaQuestao[]) => {
      this.listaCategoriaQuestao = resp;
      alert(this.listaCategoriaQuestao.length);
    })
  }

  cadastrarCategoria() {
    this.categoriaQuestaoService.postCategoriaQuestao(this.categoriaQuestao).subscribe((categoriaQuestaoResp: CategoriaQuestao) => {
      this.categoriaQuestao = categoriaQuestaoResp;

      this.findAllCategoriaProva();
      this.categoriaQuestao = new CategoriaQuestao();

    })

    this.alertas.showAlertSuccess('Nova Categoria cadastrada com sucesso!');
  }
}
