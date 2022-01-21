import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Tiago", 12345645610);
const cliente2 = new Cliente("Alice", 78945612350);
const ContaCorrenteTiago = new ContaCorrente(1202, cliente1);
const conta2 = new ContaCorrente(1001, cliente2);
conta2.depositar(500);


conta2.tranferir(300, ContaCorrenteTiago);




console.log(ContaCorrente.numeroDeContas);




