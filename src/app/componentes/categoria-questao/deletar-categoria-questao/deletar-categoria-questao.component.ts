import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaQuestao } from 'src/app/componentes/model/CategoriaQuestao';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaQuestaoService } from 'src/app/service/categoria-questao.service';

@Component({
  selector: 'app-deletar-categoria-questao',
  templateUrl: './deletar-categoria-questao.component.html',
  styleUrls: ['./deletar-categoria-questao.component.scss']
})
export class DeletarCategoriaQuestaoComponent implements OnInit {

  
  categoriaQuestao: CategoriaQuestao = new CategoriaQuestao();

  idCategoria: number;


  constructor(
    private router: Router,
    private alertas: AlertasService,
    private activatedRoute :ActivatedRoute,
    private categoriaQuestaoService: CategoriaQuestaoService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    
    AuthService.verificaLogado(this.alertas, this.router);

    this.idCategoria = this.activatedRoute.snapshot.params['id'];

    this.findCategoriaQuestao();

  }

findCategoriaQuestao(){
  return this.categoriaQuestaoService.getByIdCategoriaQuestao(this.idCategoria).subscribe((categoriaQuestaoResp: CategoriaQuestao) => {
    this.categoriaQuestao = categoriaQuestaoResp;
  })
}

deletarCategoriaQuestao(){
  return this.categoriaQuestaoService.deleteCategoriaQuestao(this.idCategoria).subscribe(() => {
    this.alertas.showAlertSuccess('Categoria apagada com sucesso!');
    this.router.navigate(['/cadastrar-categoria-questao']);
  })
}

}


