import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.scss']
})
export class MensagemComponent {

  //error e texto por serem strings não precisam estar entre [],
  @Input() error: string = '';
  //já campo é uma propriedade de entrada que espera receber um valor, precisa estar entre []
  @Input() campo?: AbstractControl | FormControl | null;
  @Input() texto: string = '';

  isErro(): boolean {
    return this.campo ? this.campo.hasError(this.error) && this.campo.dirty : true;
  }

}
