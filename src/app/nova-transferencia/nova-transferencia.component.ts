import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

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
    private transferenciaService: TransferenciaService
  ) {}

  ngOnInit(): void {}

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    }

    this.transferenciaService.adicionar(valorEmitir)
      .subscribe(
        (res) => {
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        },
        (err) => console.error(err)
      )
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
