import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[];

  constructor(
    private transferenciaService: TransferenciaService
  ) { }

  ngOnInit(): void {
    this.transferenciaService.listarTodasTransferencias()
      .subscribe(
        (res: Transferencia[]) => {
          // console.table(res)
          this.transferencias = res
        }
      )
  }

}
