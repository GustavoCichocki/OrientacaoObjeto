//Class abstrata
export class Transacao{

    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Transacao){
            throw Error ("Não deveria instanciar um Objeto (NEW) tipo Transacao");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia
    }       
    set cliente (novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente (){
        return this._cliente;
    }

    get saldo (){
        return this._saldo;
    }

    sacar(valor) {
        throw Error ("As informções devem ser anexadas pelas classes, o metodo Sacar da Transição é abstrato");
    }
    
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
