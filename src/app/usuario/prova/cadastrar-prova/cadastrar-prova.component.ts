import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaProva, createCategoriaProva } from 'src/app/model/CategoriaProva';
import { Prova } from 'src/app/model/Prova';
import { createUsuario, Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaProvaService } from 'src/app/service/categoria-prova.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cadastrar-prova',
  templateUrl: './cadastrar-prova.component.html',
  styleUrls: ['./cadastrar-prova.component.scss']
})
export class CadastrarProvaComponent implements OnInit {


  usuario: Usuario = createUsuario();
  // prova: Prova = new Prova();
  prova: Prova;
  categoriaProva: CategoriaProva = createCategoriaProva();

  idUsuario: number = environment.id;
  idCategoriaProva: number = 0;

  idProvaCriada: number | undefined = 0;

  listaCategoriaProva: CategoriaProva[] = [];


  constructor(
    private router: Router,
    private alertas: AlertasService,
    private provaService: ProvaServiceService,
    private authService: AuthService,
    private categoriaProvaService: CategoriaProvaService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    AuthService.verificaLogado(this.alertas, this.router);

    this.findAllCategoriaProva();

  }



  pegaCategoriaProvaSelecionada(event: any) {
    this.idCategoriaProva = event.target.value;
    this.findByICategoriaProva();

  }


  findAllCategoriaProva() {
    this.categoriaProvaService.getAllCategoriaProva().subscribe((categoriaProvaResp: CategoriaProva[]) => {
      this.listaCategoriaProva = categoriaProvaResp;
    })
  }

  // findByIdUsuario(){
  //   this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
  //     this.usuario = usuarioResp;
  //     // alert(usuarioResp.id + " | usuarioResp");
  //     // alert(this.usuario.id + " | usuario do find");
  //   });
  // }

  findByICategoriaProva() {
    this.categoriaProvaService.getByIdCategoriaProva(this.idCategoriaProva).subscribe((categoriaProvaResp: CategoriaProva) => {
      this.categoriaProva = categoriaProvaResp;
    });
  }





  cadastrarProva() {
    this.categoriaProva.id = this.idCategoriaProva;
    this.prova.categoria = this.categoriaProva;

    this.usuario.id = this.idUsuario;
    this.prova.usuario = this.usuario;

    // alert(this.prova.categoria.id + ' | idcateprova');
    // alert(this.prova.nome);
    // alert(this.prova.descricao);

    this.prova.usuario = this.usuario;
    this.prova.categoria = this.categoriaProva;

    this.provaService.postProva(this.prova).subscribe((provaResp: Prova) => {
      this.prova = provaResp;
      this.idProvaCriada = this.prova.id;

      this.toastr.success('Prova cadastrada com sucesso!');

      // this.prova = new Prova();
    })


  }


  cadastrarQuestoes() {


  }

}
