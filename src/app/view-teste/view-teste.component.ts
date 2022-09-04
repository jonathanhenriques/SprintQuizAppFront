import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Alternativa } from '../model/Alternativa';
import { CategoriaQuestao } from '../model/CategoriaQuestao';
import { Questao } from '../model/Questao';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriaProvaService } from '../service/categoria-prova.service';
import { CategoriaQuestaoService } from '../service/categoria-questao.service';
import { QuestaoService } from '../service/questao.service';
import { DialogOverviewExampleDialog } from '../teste/teste.component';

@Component({
  selector: 'app-view-teste',
  templateUrl: './view-teste.component.html',
  styleUrls: ['./view-teste.component.scss']
})
export class ViewTesteComponent implements OnInit {

  animal: string;
  name: string;

  usuario: Usuario = new Usuario();
  questao: Questao = new Questao();
  categoriaQuestao: CategoriaQuestao = new CategoriaQuestao();

  idQuestao: number = 0;
  // idProva: number = 0;
  idUsuario: number = environment.id;
  idCategoriaQuestao: number = 0;

  questaoCriada: Questao = new Questao();

  listaCategoriaQuestao: CategoriaQuestao[] = [];


  constructor(
    private router: Router,
    private alertas: AlertasService,
    private questaoService: QuestaoService,
    private authService: AuthService,
    private categoriaProvaService: CategoriaProvaService,
    private categoriaQuestaoService: CategoriaQuestaoService,
    private lertas: AlertasService,
    public dialogRef: MatDialogRef<ViewTesteComponent>
  ){}
 

  



  ngOnInit(){

    this.findAllCategoriaQuestao();
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  pegaCategoriaQuestaoSelecionada(event: any) {
    this.idCategoriaQuestao = event.target.value;
  }

  findAllCategoriaQuestao() {
    this.categoriaQuestaoService.getAllCategoriaQuestao().subscribe((categoriaQuestaoResp: CategoriaQuestao[]) => {
      this.listaCategoriaQuestao = categoriaQuestaoResp;
    })
  }

  findCategoriaQuestaoById(){
    this.categoriaQuestaoService.getByIdCategoriaQuestao(this.idCategoriaQuestao).subscribe((resp: CategoriaQuestao) => {
      this.categoriaQuestao = resp;
      // this.questao.categoria = resp;
    })
  }

  cadastrarQuestao() {


    this.categoriaQuestao.id = this.idCategoriaQuestao;
    this.questao.categoria = this.categoriaQuestao;
    

    this.usuario.id = this.idUsuario;
    this.questao.criador = this.usuario    

    this.questaoService.postQuestao(this.questao).subscribe((questaoResp: Questao) => {
      this.questao = questaoResp;
      this.alertas.showAlertSuccess('Questão criada com sucesso!');
      this.idQuestao = this.questao.id;
      this.questao = new Questao();
   
    })
  }

 

}


