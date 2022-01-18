import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Tiago";
cliente1.cpf = 12345645610;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 78945612350;

const ContaCorrenteTiago = new ContaCorrente();
ContaCorrenteTiago.agencia=1202;
ContaCorrenteTiago.cliente = cliente1;


const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 1001;
conta2.depositar(500);

conta2.tranferir(300, ContaCorrenteTiago);


console.log(ContaCorrenteTiago);






