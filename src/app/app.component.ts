import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { UsuarioService } from 'src/app/usuario/service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sprintQuiz';


  constructor(
    public UsuarioService: UsuarioService
  ) { }

  // logado() {
  //   let ok: boolean = false;

  //   if (environment.token != '') {
  //     // console.log('tokenpassou - ' + environment.token)
  //     ok = true;
  //   }

  //   return ok;
  // }

}
