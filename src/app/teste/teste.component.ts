import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent implements OnInit {


 

  constructor(private router: Router) { }

  ngOnInit(){
  }

  voltarPagina() {
    // window.history.back();
    // this.router.navigate(['/mural-provas']);
    this.router.navigate(['/mural-provas']);

    
  }


  
}