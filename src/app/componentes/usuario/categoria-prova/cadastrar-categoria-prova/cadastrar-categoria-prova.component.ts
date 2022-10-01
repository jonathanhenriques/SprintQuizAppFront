import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoriaProva } from 'src/app/model/CategoriaProva';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaProvaService } from 'src/app/service/categoria-prova.service';

@Component({
  selector: 'app-cadastrar-categoria-prova',
  templateUrl: './cadastrar-categoria-prova.component.html',
  styleUrls: ['./cadastrar-categoria-prova.component.scss']
})
export class CadastrarCategoriaProvaComponent implements OnInit {

  
  categoriaProva: CategoriaProva = new CategoriaProva();
  listaCategoriaProva: CategoriaProva[] = [];
  
  //variaveis tabela
  // ELEMENT_DATA: CategoriaProva[] = []
  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'acoes'];
  dataSource = new MatTableDataSource<CategoriaProva>(this.listaCategoriaProva);

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private router: Router,
    private alertas: AlertasService,
    private categoriaProvaService: CategoriaProvaService,
    ) { }

  ngOnInit() {
    window.scroll(0, 0);
    // AuthService.verificaLogado(this.alertas, this.router);

    this.findAllCategoriaProva();

  }

  findAllCategoriaProva() {
    this.categoriaProvaService.getAllCategoriaProva().subscribe((resp: CategoriaProva[]) => {
      this.listaCategoriaProva = resp;
      // this.ELEMENT_DATA = resp;
      this.dataSource = new MatTableDataSource<CategoriaProva>(this.listaCategoriaProva);
      this.dataSource.paginator = this.paginator;
    })
  }

  cadastrarCategoriaProva() {
    this.categoriaProvaService.postCategoriaProva(this.categoriaProva).subscribe((categoriaProvaResp: CategoriaProva) => {
      this.categoriaProva = categoriaProvaResp;

      this.findAllCategoriaProva();
      this.categoriaProva = new CategoriaProva();
      this.alertas.showAlertSuccess('Nova Categoria cadastrada com sucesso!');

    })

    
  }

  //-----------------códigos para a tabela-----------------------------------------------------------------------
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
 

}


 //----------------------------------------------------------------------------------------
//  export interface PeriodicElement {
//   titulo: string;
//   id: number;
//   descricao: number;
//   acoes: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {id: 1, titulo: 'Hydrogen', descricao: 1.0079, acoes: 'H'},
//   {id: 2, titulo: 'Helium', descricao: 4.0026, acoes: 'He'},
//   {id: 3, titulo: 'Lithium', descricao: 6.941, acoes: 'Li'},
//   {id: 4, titulo: 'Beryllium', descricao: 9.0122, acoes: 'Be'},
//   {id: 5, titulo: 'Boron', descricao: 10.811, acoes: 'B'},
//   {id: 6, titulo: 'Carbon', descricao: 12.0107, acoes: 'C'},
//   {id: 7, titulo: 'Nitrogen', descricao: 14.0067, acoes: 'N'},
//   {id: 8, titulo: 'Oxygen', descricao: 15.9994, acoes: 'O'},
//   {id: 9, titulo: 'Fluorine', descricao: 18.9984, acoes: 'F'},
//   {id: 10, titulo: 'Neon', descricao: 20.1797, acoes: 'Ne'},
//   {id: 11, titulo: 'Sodium', descricao: 22.9897, acoes: 'Na'},
//   {id: 12, titulo: 'Magnesium', descricao: 24.305, acoes: 'Mg'},
//   {id: 13, titulo: 'Aluminum', descricao: 26.9815, acoes: 'Al'},
//   {id: 14, titulo: 'Silicon', descricao: 28.0855, acoes: 'Si'},
//   {id: 15, titulo: 'Phosphorus', descricao: 30.9738, acoes: 'P'},
//   {id: 16, titulo: 'Sulfur', descricao: 32.065, acoes: 'S'},
//   {id: 17, titulo: 'Chlorine', descricao: 35.453, acoes: 'Cl'},
//   {id: 18, titulo: 'Argon', descricao: 39.948, acoes: 'Ar'},
//   {id: 19, titulo: 'Potassium', descricao: 39.0983, acoes: 'K'},
//   {id: 20, titulo: 'Calcium', descricao: 40.078, acoes: 'Ca'},
// ];

