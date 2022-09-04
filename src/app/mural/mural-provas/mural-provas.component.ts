import { Component, Input, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Prova } from 'src/app/model/Prova';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProvaServiceService } from 'src/app/service/prova-service.service';
import { environment } from 'src/environments/environment.prod';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ViewTesteComponent } from 'src/app/view-teste/view-teste.component';

@Component({
  selector: 'app-mural-provas',
  templateUrl: './mural-provas.component.html',
  styleUrls: ['./mural-provas.component.scss']
})
export class MuralProvasComponent implements OnInit {


  idProva: number;
  name: string;

  usuario: Usuario = new Usuario();
  prova: Prova = new Prova();

  idUsuario: number = environment.id;

  listaProvas: Prova[] = [];

  constructor(
    private router: Router,
    private alertas: AlertasService,
    private provaService: ProvaServiceService,
    private authService: AuthService,
    public dialog: MatDialog
  ) { }

  ngOnInit(){

    AuthService.verificaLogado(this.alertas, this.router);
    this.usuario.id = this.idUsuario;
    this.findByIdUsuario();
    // this.listaProvas = this.usuario.provas;
    this.findProvasByCriadorId();
    
    
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
      this.usuario = usuarioResp;
      
    })
  }

  findProvasByCriadorId(){
    this.provaService.getProvaByCriadorId(this.idUsuario).subscribe((listaProvasResp: Prova[]) =>{
      this.listaProvas = listaProvasResp;
      // listaProvasResp.forEach(e => {
      //   alert(e.nome);
      // })
    })
  }

  // findProvasUsuario(){
  //   this.authService.getByIdUsuario(this.idUsuario).subscribe((usuarioResp: Usuario) => {
  //     this.listaProvas = usuarioResp.provas;
  //     this.listaProvas.forEach(p => {
  //       alert(p.nome);
  //     });
  //   })
  // }

  openDialog(): void {
    const dialogRef = this.dialog.open(ViewTesteComponent, {
      width: '450px',
      data: {name: this.name, idProva: this.prova.id},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
    });
  }



}

