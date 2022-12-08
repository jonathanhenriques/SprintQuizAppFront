import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaQuestao, createCategoriaQuestao } from '../../model/CategoriaQuestao';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';
import { CategoriaQuestaoService } from '../../service/categoria-questao.service';

@Component({
  selector: 'app-cadastrar-categoria-questao',
  templateUrl: './cadastrar-categoria-questao.component.html',
  styleUrls: ['./cadastrar-categoria-questao.component.scss']
})
export class CadastrarCategoriaQuestaoComponent implements OnInit {


  titulo: FormControl = new FormControl(null, [Validators.minLength(1), Validators.maxLength(50)]);
  descricao: FormControl = new FormControl(null, [Validators.minLength(1), Validators.maxLength(1000)]);

  categoriaQuestao: CategoriaQuestao = createCategoriaQuestao();

  listaCategoriaQuestao: CategoriaQuestao[] = [];


  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource<CategoriaQuestao>(this.listaCategoriaQuestao);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private router: Router,
    private alertas: AlertasService,
    private categoriaQuestaoService: CategoriaQuestaoService,
    private toastr: ToastrService
  ) { }



  // constructor(
  //   private router: Router,
  //   private alertas: AlertasService,
  //   private store: Store<AppState>,
  //   private toastr: ToastrService
  // ) { }

  ngOnInit() {
    window.scroll(0, 0);

    UsuarioService.verificaLogado(this.alertas, this.router);

    //dispatch faz um envio para a action
    // this.store.dispatch(fromCategoriaQuestaoAction.getAllCategoriaQuestao());
    this.findAllCategoriaQuestao();


  }

  validaCampos(): boolean {
    return this.titulo.valid && this.descricao.valid
  }

  findAllCategoriaQuestao() {
    this.categoriaQuestaoService.getAllCategoriaQuestao().subscribe((categoriaQuestaoResp: CategoriaQuestao[]) => {
      this.listaCategoriaQuestao = categoriaQuestaoResp;
      this.dataSource = new MatTableDataSource<CategoriaQuestao>(this.listaCategoriaQuestao);
      this.dataSource.paginator = this.paginator;
    })
  }

  cadastrarCategoriaQuestao() {
    this.categoriaQuestaoService.postCategoriaQuestao(this.categoriaQuestao).subscribe((categoriaQuestaoResp: CategoriaQuestao) => {
      this.categoriaQuestao = categoriaQuestaoResp;

      this.findAllCategoriaQuestao();
      this.categoriaQuestao = createCategoriaQuestao();
      // this.alertas.showAlertSuccess('Nova Categoria cadastrada com sucesso!');
      this.toastr.success('Nova Categoria cadastrada com sucesso!');

    }, erro => {
      if (erro.errors) {
        erro.errors.forEach((element: { message: string | undefined; }) => {
          this.toastr.error(element.message);
        });
      } else
        this.toastr.error(erro.errors.message);

      this.alertas.showAlertDanger('Categoria não cadastrada! |' + erro);
    })


  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
