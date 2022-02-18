import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 444455566);
const ContaCorrenteRicardo = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(102, cliente2);


console.log(ContaCorrenteRicardo);




