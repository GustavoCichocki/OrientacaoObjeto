import { Transacao } from "./Transacao.js";

export class ContaPoupanca extends Transacao{

    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}