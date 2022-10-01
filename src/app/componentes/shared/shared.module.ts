import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ModalModule } from "ngx-bootstrap/modal";
import { ToastrModule } from "ngx-toastr";
import { AlertaComponent } from "./alerta/alerta.component";
import { GraficosModule } from "./graficos/graficos.module";
import { MaterialModule } from "./material.module";
import { MensagemComponent } from "./mensagem/mensagem.component";
import { SharedRoutingModule } from "./shared-routing.module";

import { RouterModule } from "@angular/router";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav/nav.component";
import { UsuarioModule } from "../usuario/usuario.module";
import { NavegacaoBarComponent } from "./navegacao-bar/navegacao-bar.component";


@NgModule({
  declarations: [

    MensagemComponent,
    AlertaComponent,
    NavComponent,
    NavegacaoBarComponent,

    
    

    
    

    

  ],
  imports: [
    CommonModule,
    FormsModule,
    // HttpClientModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 4000,
      closeButton: true,
      progressBar: true,
      preventDuplicates: true
    }
     
    ),
    RouterModule,
    
    SharedRoutingModule,

    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatRadioModule,
    MatListModule,
    MatCardModule,


    GraficosModule,
    NgxChartsModule,

    
  ],
  exports: [
    MensagemComponent,
    NavComponent,
    NavegacaoBarComponent,

    

    

    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatRadioModule,
    MatListModule,
    MatCardModule,
  ]
})
export class SharedModule { }
