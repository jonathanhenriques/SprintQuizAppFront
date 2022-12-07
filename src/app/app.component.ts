import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sprintQuiz';


  constructor(
    public authService: AuthService
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
