import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boas-vindas',
  templateUrl: './boas-vindas.component.html',
  styleUrls: ['./boas-vindas.component.scss']
})
export class BoasVindasComponent implements OnInit {



  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scroll(0,0);


  }

  


}
