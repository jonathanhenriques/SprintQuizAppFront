import { Component, OnInit } from '@angular/core';
import { DadosService } from '../../service/dados.service';


declare var google: any; //variavel global para todo o scopo do projeto

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent implements OnInit {


  private dados: any;
  constructor(private dadosService: DadosService) { }

  ngOnInit(){
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.ngOnInit();
      }
    )

  }


  init(): void {
    if(typeof(google) !== 'undefined') { //verifica se a variável não é undefined
      google.charts.load('current', {'packages':['corechart']}); //carrega os pacotes necessários
      setTimeout(() => { //um tempo para garantir que a api foi carregada e retornará o que pedimos
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 3000);
    }
  }

  exibirGraficos(): void {
    this.exibirPieChart();
    // this.exibir3dPieChart();
    // this.exibirBarChart();
    // this.exibirLineChart();
    // this.exibirColumnChart();
    // this.exibirDonutChart();
  }

  exibirPieChart(): void {
    const el = document.getElementById('pie_chart'); // pega a referencia da div no html
    const chart = new google.visualization.PieChart(el); // cria uma instancia do grafico

    chart.draw(this.obterDataTable(), this.obterOpcoes()); //desenha e obtem os dados
  }



  obterDataTable(): any { //formato do grafico que mapeia o array dados
    const data = new google.visualization.DataTable(); //cria instancia do grafico

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  obterOpcoes(): any { //formata 
    return {
      'title' : 'Quantidade de cadastros primeiro semestre',
      'width' : 400,
      'height': 300
    };
  }

}
