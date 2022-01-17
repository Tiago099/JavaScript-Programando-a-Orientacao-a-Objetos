class Cliente{
    nome;
    cpf;
    

}
class  ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0){
            return;
        }
            this._saldo += valor;
           
        }
    }


const cliente1 = new Cliente();
cliente1.nome = "Tiago";
cliente1.cpf = 12345645610;
cliente1.agencia = 1202;
cliente1.saldo = 0;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 78945612350;
cliente2.agencia = 1001;
cliente2.saldo = 0;

const ContaCorrenteTiago = new ContaCorrente();
ContaCorrenteTiago.agencia=1202


ContaCorrenteTiago.depositar(-110);
ContaCorrenteTiago.depositar(110);
ContaCorrenteTiago.depositar(110);


const valorSacado = ContaCorrenteTiago.sacar(50);
console.log(valorSacado);



console.log(ContaCorrenteTiago);


