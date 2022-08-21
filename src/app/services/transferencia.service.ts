import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  listaTransferencias: any[]

  constructor() {
    this.listaTransferencias = []
  }

  get trasferencias() {
    return this.listaTransferencias;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia)
    this.listaTransferencias.push(transferencia)
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
