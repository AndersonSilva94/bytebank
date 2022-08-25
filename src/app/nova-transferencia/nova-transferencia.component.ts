import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {}

  transferir() {
    console.log('Solicitada nova transferência');
    this.aoTransferir.emit({
      valor: this.valor,
      destino: this.destino
    })
    this.limparCampos();
    this.router.navigateByUrl('extrato');
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
