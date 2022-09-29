import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { NavegacaoBarComponent } from './componentes/nav/navegacao-bar/navegacao-bar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sprintQuiz';


  constructor(
    public authService: AuthService
    ){}

}
