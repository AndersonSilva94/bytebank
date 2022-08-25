import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[]
  private url = 'http://localhost:3000/transferencias';

  constructor(
    private http: HttpClient
  ) {
    this.listaTransferencias = []
  }

  get trasferencias() {
    return this.listaTransferencias;
  }

  listarTodasTransferencias(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia)
    this.listaTransferencias.push(transferencia)
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }
}
