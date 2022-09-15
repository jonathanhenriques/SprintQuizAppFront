import { BsModalRef } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  @Input() message: string;
  @Input() type: 'alert-success';

  constructor(
    public modal: BsModalRef
  ) { }

  ngOnInit(): void {
  }

  onClose(){
    this.modal.hide();
  }

}
