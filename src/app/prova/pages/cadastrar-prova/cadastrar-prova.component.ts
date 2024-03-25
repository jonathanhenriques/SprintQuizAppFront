import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaProva, createCategoriaProva } from 'src/app/categoria-prova/model/CategoriaProva';
import { Prova } from '../../model/Prova';
import { Usuario, createUsuario } from 'src/app/usuario/model/Usuario';
import { AlertasService } from 'src/app/shared/services/alertas.service';
import { CategoriaProvaService } from 'src/app/categoria-prova/service/categoria-prova.service';
import { ProvaServiceService } from '../../service/prova-service.service';
import { environment } from 'src/environments/environment.prod';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';

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

    private categoriaProvaService: CategoriaProvaService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
    // UsuarioService.verificaLogado(this.alertas, this.router);

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
  //   this.UsuarioService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
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
